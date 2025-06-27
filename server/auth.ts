import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { storage } from "./storage";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "your-super-secret-jwt-key-change-this-in-production";
const JWT_EXPIRES_IN = "7d";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    username: string;
    email: string;
    role: string;
  };
}

export const generateToken = (
  userId: number,
  username: string,
  email: string,
  role: string,
): string => {
  return jwt.sign(
    {
      id: userId,
      username,
      email,
      role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN },
  );
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export const authenticateToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    console.log("No token provided in request");
    return res.status(401).json({ message: "Access token required" });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      console.log("Token verification failed");
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    console.log("Decoded", decoded);
    console.log("Token decoded successfully:", {
      userId: decoded.id,
      role: decoded.role,
    });

    // Verify user still exists
    const user = await storage.getUserById(decoded.id);
    if (!user) {
      console.log("User not found for ID:", decoded.id);
      return res.status(403).json({ message: "User not found" });
    }

    req.user = {
      id: user.id,
      username: user.username,
      email: user.email || "",
      role: user.role,
    };

    console.log("User authenticated successfully:", {
      id: user.id,
      role: user.role,
    });
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    return res.status(403).json({ message: "Invalid token" });
  }
};

export const requireAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  console.log("Checking admin access for user:", req.user);
  if (!req.user || req.user.role !== "admin") {
    console.log("Admin access denied for user:", req.user?.role);
    return res.status(403).json({ message: "Admin access required" });
  }
  console.log("Admin access granted");
  next();
};
