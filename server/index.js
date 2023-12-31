import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

// Importing custom Routes
import companyRoutes from "./routes/companyRoutes.js";
import techRoutes from "./routes/techRoutes.js";
import comp_typesRoutes from "./routes/comp_typesRoutes.js";
import comp_sizeRoutes from "./routes/comp_sizeRoutes.js";

// Instances
const app = express();

// Middleware
app.use(bodyParser.json());

// API Routing
app.use("/api/v1/company", companyRoutes);
app.use("/api/v1/tech", techRoutes);
app.use("/api/v1/compTypes", comp_typesRoutes);
app.use("/api/v1/compSize", comp_sizeRoutes);

const port = process.env.PORT || 9000;

// Server spin-up
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
