import express from "express";
import {
  getForm,
  getFormById,
  createForm,
  updateForm,
  deleteForm,
} from "../controllers/Form.js";

const router = express.Router();

router.get("/form", getForm);
router.get("/form/:id", getFormById);
router.post("/form", createForm);
router.patch("/form/:id", updateForm);
router.delete("/form/:id", deleteForm);

export default router;
