import {
  createAuthor,
  countAuthors,
  findAllAuthors,
  findAuthor,
} from "../repositories/author.js";

const resolvers = {
  Query: {
    countAuthors: async () => await countAuthors(),
    findAllAuthors: async () => await findAllAuthors(),
    findAuthor: async (root, args) => await findAuthor(root, args),
  },
  Mutation: {
    createAuthor: async (root, args) => await createAuthor(root, args),
  },
};

export default resolvers;
