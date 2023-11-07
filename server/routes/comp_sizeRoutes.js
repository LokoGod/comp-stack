import express from "express";
import compSizeController from "../controllers/comp_sizeController.js";

const router = express.Router();

router.get("/", compSizeController.getCompSize);

export default router;
