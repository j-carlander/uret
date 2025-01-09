import { runQuery } from "../db.js";
import bcrypt from "bcrypt";

export async function user(req, res) {
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
}
