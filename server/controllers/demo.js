import express from "express";
import db from "../database/DBconfig.js";

const router = express.Router();

router.get("/data", (req, res) => {
  module.query("SELECT * FROM comp_det", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

export default router;
