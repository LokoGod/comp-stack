import express from "express";
import cors from "cors";
import "dotenv/config";

import DBconfig from "./database/DBconfig.js";

import demo from "./controllers/demo.js";

const app = express();

app.use("/", demo);

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
