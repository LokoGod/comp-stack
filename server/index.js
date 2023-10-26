import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Comp-Stack API</h1>");
});

const port = process.env.PORT || 9000;

const start = async () => {
  try {
  } catch (error) {}
};
