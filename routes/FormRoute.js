import express from "express";
import { getForm, getFormById, createForm } from "../controllers/Form.js";

const router = express.Router();

router.get("/form", getForm);
router.get("/form/:id", getFormById);
router.post("/form", createForm);

export default router;
