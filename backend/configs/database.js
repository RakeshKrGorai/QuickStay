import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`);
    console.log("Connected to Database");
  } catch (err) {
    console.log("Error connecting to Database : ", err.message);
  }
};

export default connectDB;
