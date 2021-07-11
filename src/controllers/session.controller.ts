import { Request, Response } from "express";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSession,
} from "../services/session.service";
import { verifyCredentials } from "../services/user.service";
import config from "config";
import { sign } from "../utils/jwt.utils";

export async function createSessionHandler(req: Request, res: Response) {
  // check credentials
  const user = await verifyCredentials(req.body);
  if (!user) {
    res.status(401).send("Invalid username or password");
  }
  // create session
  const session = await createSession(
    // @ts-ignore
    user._id,
    req.get("user-agent") || "",
    (req.headers["x-forwarded-for"] || req.connection.remoteAddress) as string
  );

  // create access token
  // @ts-ignore
  const accessToken = createAccessToken({ user, session });
  /*eslint-disable */

  // create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  });

  return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  //@ts-ignore
  const sessions = await findSession({ user: req.user });
  return res.status(200).send(sessions);
}

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  //@ts-ignore
  const sessionId = req.user.session;
  await updateSession({ _id: sessionId }, { valid: false });
  return res.sendStatus(200);
}
