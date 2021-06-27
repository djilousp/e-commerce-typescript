import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { omit } from "lodash";
import log from "../logger";
export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(omit(JSON.parse(JSON.stringify(user)), "password"));
  } catch (error) {
    log.error(error);
    return res.status(401).send(error.message);
  }
}
