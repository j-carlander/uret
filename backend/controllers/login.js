import { runQuery } from "../db.js";
import bcrypt from "bcrypt";
import jwtUtil from "../utils/jwtUtil.js";

export async function login(req, res) {
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
}
