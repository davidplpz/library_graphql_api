import { UserInputError } from "apollo-server";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

dotenv.config({ silent: process.env.NODE_ENV === "production" });

const SECRET_JWT = `${process.env["SECRET_JWT"]}`;

export const signUp = async (root, args) => {
  try {
    const username = args.username;
    const rawPassword = args.password;
    const password = bcryptjs.hashSync(rawPassword);
    const user = new User({ username, password });
    await user.save();
    return user;
  } catch (error) {
    throw new UserInputError(error.message, { invalidArgs: args });
  }
};

export const signIn = async (root, args) => {
  const username = args.username;
  const rawPassword = args.password;
  const user = await User.findOne({ username: username });
  const password = bcryptjs.compareSync(rawPassword, user.password);
  if (!user || !password) {
    throw new UserInputError("Credenciales inválidas");
  }
  const token = {
    username: args.username,
    id: user._id,
  };

  return {
    value: jwt.sign(token, SECRET_JWT),
  };
};

export const me = (root, args, context) => {
  return context.currentUser;
};
