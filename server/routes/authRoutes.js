import express from "express";
import { registerUser, userLogin } from "../controller/userController.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/signup", registerUser);

export default router;
