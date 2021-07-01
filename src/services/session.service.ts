import Session, { SessionDocument } from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return JSON.parse(JSON.stringify(session));
}
