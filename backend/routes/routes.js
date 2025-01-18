import express from "express";
import { login } from "../controllers/login.js";
import { register } from "../controllers/register.js";
import { validateToken } from "../middleware/validateToken.js";

export const router = express.Router();

router.post("/user", register);

router.post("/login", login);

router.use(validateToken);
