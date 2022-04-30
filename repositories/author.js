import { UserInputError } from "apollo-server";
import Author from "../models/author.js";

export const countAuthors = async () =>
  await Author.collection.countDocuments();

export const createAuthor = async (root, args) => {
  try {
    const author = new Author({ ...args });
    await author.save();
    return author;
  } catch (error) {
    throw new UserInputError(error.message, { invalidArgs: args });
  }
};

export const findAllAuthors = async () => {
  const authors = await Author.find({});
  return authors;
};

export const findAuthor = async (root, args) => {
  const authorId = args.id;
  const author = await Author.findOne({ _id: authorId });
  return author;
};

export const addPhotoToAuthor = async (root, args) => {
  const authorId = args.id;
  const image = args.image;
  try {
    const author = await Author.findById(authorId);
    author.image = image;
    author.save();
    return author;
  } catch (error) {
    throw new Error(error.message);
  }
};
