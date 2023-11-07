import express from "express";
import compTypesController from "../controllers/comp_typesController.js";

const router = express.Router();

router.get("/", compTypesController.getCompType);

export default router;
