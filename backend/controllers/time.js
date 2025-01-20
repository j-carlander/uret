import { runQuery } from "../db.js";
import { formatDateTimeSwe } from "../utils/formatDateTime.js";

export async function time(req, res) {
  const { timestamp, type } = req.body;
  const { userID } = req.cookies;

  const { date, time } = formatDateTimeSwe(timestamp);
  console.log("timestamp: ", date, time, type, "userID: ", userID);

  const checkQuery = "SELECT * FROM clockings WHERE date = ? AND userid = ?";
  const checkResult = await runQuery(checkQuery, [date, userID]);

  const query =
    checkResult.length > 0
      ? `UPDATE clockings SET ${type} = ? WHERE date = ? AND userid = ?`
      : `INSERT INTO clockings ( ${type}, date, userid) VALUES (?, ?, ?)`;
  console.log("query: ", query);

  const result = await runQuery(query, [time, date, userID]);
  console.log("query result: ", result);

  res.json({ message: "Success" });
}

export async function checkTime(req, res, next) {
  const { timestamp, type, rewrite } = req.body;
  const { userID } = req.cookies;

  // check to see if request data is malformed, return 400 if so
  if (
    !Date.parse(timestamp) ||
    (type != "start" && type != "stop") ||
    typeof rewrite != "boolean"
  )
    return res.status(400).json({ message: "malformed request" });

  // if date exist and rewrite is true, continue
  if (rewrite) return next();

  // check if date exist, if so send back to confirm rewrite, else continue
  let query = "SELECT * FROM clockings WHERE date = ? AND userid = ?";
  if (type == "start") {
    query += " AND start IS NOT NULL";
  } else if (type == "stop") {
    query += " AND stop IS NOT NULL";
  }
  const { date } = formatDateTimeSwe(timestamp);
  const result = await runQuery(query, [date, userID]);

  if (result.length > 0)
    return res.status(409).json({ message: "Already provided" });

  next();
}
