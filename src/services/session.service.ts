import { LeanDocument } from "mongoose";
import config from "config";
import { sign } from "../utils/jwt.utils";
import Session, { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";

export async function createSession(
  userId: string,
  userAgent: string,
  ip: string
) {
  const session = await Session.create({ user: userId, userAgent, ip });
  return JSON.parse(JSON.stringify(session));
}

export function createAccessToken({
  user,
  session,
}: {
  user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  const accessToken = sign(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get("accessTokenTtl") }
  );
  return accessToken;
}
