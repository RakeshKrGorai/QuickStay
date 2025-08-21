import express from "express";
import { clerkMiddleware } from "@clerk/express";

import "dotenv/config";
import cors from "cors";

import connectDB from "./configs/database.js";
import clerkWebHooks from "./controllers/clerkWebHook.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error, DB connection unsuccessful");
  });

app.get("/", (req, res) => {
  res.send("API is working");
});

// API for clerk webhook
app.use("/api/clerk", clerkWebHooks);

// Middlewares
app.use(clerkMiddleware());
app.use(express.json());
