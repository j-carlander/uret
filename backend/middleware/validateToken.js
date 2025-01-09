import jwtUtil from "../utils/jwtUtil.js";

export async function validateToken(req, res, next) {
  // TODO: fix validation for token by cookie
  const token = req.cookie;
  console.log("token: ", token);
  // if (token) {
  //   const payload = jwtUtil.validateToken(token.replace("Bearer ", ""));

  //   if (payload) {
  //     res.locals.jwtPayload = payload;
  //     return next();
  //   }
  // }
  // return res.status(401).json({ error: "Invalid or no token provided!" });

  next();
}
