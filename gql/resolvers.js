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
    createAuthor: async (root, args) => await createAuthor(root, args),
    addPhotoToAuthor: async (root, args) => await addPhotoToAuthor(root, args),
    createBook: async (root, args) => await createBook(root, args),
    signUp: async (root, args) => await signUp(root, args),
    signIn: async (root, args) => await signIn(root, args),
  },
};

export default resolvers;
