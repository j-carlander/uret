import jwtUtil from "../utils/jwtUtil.js";

export async function validateToken(req, res, next) {
  const { token } = req.cookies;

  if (token) {
    const payload = jwtUtil.validateToken(token);

    if (payload) {
      res.locals.jwtPayload = payload;
      return next();
    }
  }
  return res.status(401).json({ error: "Invalid or no token provided!" });
}
