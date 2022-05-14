import { UserInputError } from "apollo-server";
import Book from "../models/book.js";
import Author from "../models/author.js";
import authenticated from "../services/authentication.js";

export const countBooks = async () => Book.collection.countDocuments();

export const createBook = async (root, args, context) => {
  authenticated(context);
  try {
    const title = args.title;
    const sinopsis = args.sinopsis;
    const release_date_raw = args.release_date;
    const release_date = new Date(release_date_raw);
    const authorId = args.authorId;
    const book = new Book({
      title: title,
      sinopsis: sinopsis,
      release_date: release_date,
    });
    try {
      const author = await Author.findById(authorId);
      book.author = author;
      await book.save();
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new UserInputError(error.message, { invalidArgs: args });
  }
};

export const findAllBooks = async () => await Book.find({}).populate("author");

export const findBook = async (root, args) => {
  const bookId = args.id;
  try {
    const book = await Book.findById(bookId).populate("author");
    return book;
  } catch (error) {
    throw new Error(error.message);
  }
};
