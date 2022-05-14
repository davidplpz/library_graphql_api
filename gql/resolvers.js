import {
  createAuthor,
  countAuthors,
  findAllAuthors,
  findAuthor,
  addPhotoToAuthor,
} from "../repositories/author.js";
import {
  countBooks,
  createBook,
  findAllBooks,
  findBook,
} from "../repositories/book.js";
import { me, signIn, signUp } from "../repositories/user.js";

const resolvers = {
  Query: {
    countAuthors: async () => await countAuthors(),
    findAllAuthors: async () => await findAllAuthors(),
    findAuthor: async (root, args) => await findAuthor(root, args),
    countBooks: async () => await countBooks(),
    findAllBooks: async () => await findAllBooks(),
    findBook: async (root, args) => await findBook(root, args),
    me: (root, args, context) => me(root, args, context),
  },
  Mutation: {
    createAuthor: async (root, args, context) =>
      await createAuthor(root, args, context),
    addPhotoToAuthor: async (root, args, context) =>
      await addPhotoToAuthor(root, args, context),
    createBook: async (root, args, context) =>
      await createBook(root, args, context),
    signUp: async (root, args) => await signUp(root, args),
    signIn: async (root, args) => await signIn(root, args),
  },
};

export default resolvers;
