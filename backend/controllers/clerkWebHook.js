import { Webhook } from "svix";
import User from "../models/User.js"; // Make sure this path is correct

const clerkWebHooks = async (req, res) => {
  try {
    // 1. Get the raw payload and headers from the request.
    // The `express.raw()` middleware in your app.js provides `req.body` as a buffer.
    const payload = req.body;
    const headers = req.headers;

    // 2. Create a new Svix webhook instance with your secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // 3. Verify the request signature.
    // If verification fails, it will throw an error and jump to the `catch` block.
    const evt = whook.verify(payload, headers);

    // 4. Extract the event type and data from the verified event object.
    const eventType = evt.type;
    const eventData = evt.data;

    console.log(`✅ Webhook received: ${eventType}`);

    // 5. Handle the event with a switch statement.
    switch (eventType) {
      case "user.created": {
        const { id, email_addresses, first_name, last_name, image_url } =
          eventData;

        await User.create({
          _id: id,
          email: email_addresses[0].email_address,
          username: `${first_name} ${last_name}`,
          image: image_url,
        });
        console.log(`User ${id} created in database.`);
        break;
      }
      case "user.updated": {
        const { id, email_addresses, first_name, last_name, image_url } =
          eventData;

        await User.findByIdAndUpdate(id, {
          email: email_addresses[0].email_address,
          username: `${first_name} ${last_name}`,
          image: image_url,
        });
        console.log(`User ${id} updated in database.`);
        break;
      }
      case "user.deleted": {
        // For deleted events, the payload contains the user ID.
        const { id } = eventData;
        await User.findByIdAndDelete(id);
        console.log(`User ${id} deleted from database.`);
        break;
      }
    }

    // Respond with a 200 status to acknowledge receipt of the webhook.
    res
      .status(200)
      .json({ success: true, message: "Webhook processed successfully." });
  } catch (error) {
    // If verification fails or any other error occurs, log it and respond with an error.
    console.error("Error processing webhook:", error.message);
    res
      .status(400)
      .json({ success: false, message: "Webhook verification failed." });
  }
};

export default clerkWebHooks;
