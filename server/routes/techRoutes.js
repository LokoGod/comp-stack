import express from "express";
import techController from "../controllers/techController.js";

const router = express.Router();

router.get("/", techController.getTech);

export default router;
