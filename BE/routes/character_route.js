import express from "express";
import getAllCharacters from "../controllers/character_controller.js";

const router = express.Router();

router.get("/", getAllCharacters);

export default router;
