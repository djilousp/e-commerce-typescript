import { Request, Response } from "express";
import { createSession } from "../services/session.service";
import { verifyCredentials } from "../services/user.service";
import log from "../logger";

export async function createSessionHandler(req: Request, res: Response) {
  // check credentials
  const user = verifyCredentials(req.body);
  if (!user) {
    res.status(401).send("Invalid username or password");
  }
  // create sessin
  const session = await createSession(user._id, res.get("user-agent") || "");
}
