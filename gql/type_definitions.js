import { gql } from "apollo-server";

const typeDefinitions = gql`
  type Author {
    id: ID!
    name: String!
    created_at: String!
  }

  type Book {
    id: ID!
    title: String!
    sinopsis: String!
    release_date: String!
    author: Author!
    created_at: String!
  }

  type Query {
    countAuthors: Int!
    findAllAuthors: [Author]
    findAuthor(id: ID!): Author
    countBooks: Int!
    findAllBooks: [Book]
    findBook(id: ID!): Book
  }

  type Mutation {
    createAuthor(name: String!): Author
    createBook(
      title: String!
      sinopsis: String!
      release_date: String
      authorId: String!
    ): Book
  }
`;

export default typeDefinitions;
