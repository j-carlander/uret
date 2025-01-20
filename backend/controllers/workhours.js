import { runQuery } from "../db";

export async function workhours(req, res) {
  const { minperdayoddweek, minperdayevenweek } = req.body;
  const { userID } = req.cookies;

  const checkQuery = "SELECT * FROM workdaylength WHERE userid = ?";
  const checkResult = await runQuery(checkQuery, userID);

  const query =
    checkResult.length > 0
      ? `UPDATE workdaylength SET minperdayoddweek = ?, minperdayevenweek = ? WHERE userid = ?`
      : `INSERT INTO workdaylength ( minperdayoddweek, minperdayevenweek, userid) VALUES (?, ?, ?)`;

  const result = await runQuery(query, [
    minperdayoddweek,
    minperdayevenweek,
    userID,
  ]);
  if (result.affectedRows === 0)
    return res.status(500).json({ error: "Internt serverfel!" });

  res.json({ message: "Success" });
}
