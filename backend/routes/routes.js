import express from "express";
import { login } from "../controllers/login.js";
import { user } from "../controllers/user.js";

export const router = express.Router();

router.post("/user", user);

router.post("/login", login);
