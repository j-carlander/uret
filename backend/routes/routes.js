import express from "express";
import bcrypt from "bcrypt";
import { runQuery } from "../db.js";
import jwtUtil from "../utils/jwtUtil.js";

export const router = express.Router();

router.post("/user", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const sqlQuery =
    "INSERT INTO users (fname, lname, email, password) VALUES (?, ?, ?, ?)";

  const result = await runQuery(sqlQuery, [fname, lname, email, hashed]);

  if (result.affectedRows === 1) {
    res.status(201).json({ message: "Kontot skapades" });
  } else {
    res.status(400).json({ message: "Kontot skapades inte" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(403).json({ message: "Saknar email eller lösenord!" });

  const user = await runQuery("SELECT * FROM users WHERE email = ?", [email]);

  if (user.length === 0)
    return res.status(403).json({ message: "Fel email eller lösenord!" });

  const storedHash = user[0].password;

  const passwordMatch = await bcrypt.compare(password, storedHash);

  if (!passwordMatch)
    return res.status(403).json({ message: "Fel email eller lösenord!" });

  const token = jwtUtil.createToken({ name: user[0].name });

  res.status(200).json({ message: "Inloggad", token });
});
