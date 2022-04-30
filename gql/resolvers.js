import Author from "../models/author.js";
import { createAuthor, countAuthors } from "../repositories/author.js";

const resolvers = {
  Query: {
    countAuthors: async () => await countAuthors(),
  },
  Mutation: {
    createAuthor: async (root, args) => await createAuthor(root, args),
  },
};

export default resolvers;
