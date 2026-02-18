import jwt from "jsonwebtoken";

export function getUserFromRequest(req: Request) {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  const token = auth.replace("Bearer ", "");
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
      
    };
  } catch {
    return null;
  }
}
