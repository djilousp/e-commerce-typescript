import { LeanDocument } from "mongoose";
import config from "config";
import { get } from "lodash";
import { findUser } from "./user.service";
import { decode, sign } from "../utils/jwt.utils";
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
export function reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
  // decode refreshToken
  const { decoded } = decode(refreshToken);
  if (!decoded || !get(decoded, "_id")) return false;
  // Get session
  const session = Session.findById(get(decoded, "_id"));

  // Make sure the session is still valid
  //@ts-ignore
  if (!session || !session?.valid) return false;
  //@ts-ignore
  const user = await findUser({ _id: session.user });
  if (!user) return false;
  //@ts-ignore
  const accessToken = createAccessToken({ user, session });
  return accessToken;
}
