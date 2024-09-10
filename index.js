import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./userRoute.js";
import cors from "cors";
import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
const app = express();
dotenv.config();

app.use(express.json());
app.use("/form", userRouter);
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: {
      "Access-Control-Allow-Origin": "*",
    },
  })
);

mongoose.connect(process.env.URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 3000 - ${process.pid}`);
  });
});
}
