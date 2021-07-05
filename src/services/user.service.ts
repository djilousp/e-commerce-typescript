import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument } from "../models/user.model";
import { omit } from "lodash";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error);
  }
}

export async function verifyCredentials({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });
  if (!user) {
    return false;
  }
  const isValid = user.comparePassword(password);
  if (!isValid) {
    return false;
  }
  return omit(JSON.parse(JSON.stringify(user)), "password");
}
export async function findUser(query: FilterQuery<UserDocument>) {
  return User.findOne(query).lean();
}
