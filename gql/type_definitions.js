import { gql } from "apollo-server";

const typeDefinitions = gql`
  type Token {
    value: String!
  }

  type User {
    id: ID!
    username: String!
    created_at: String!
  }

  type Author {
    id: ID!
    name: String!
    created_at: String!
    image: String!
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
    findAllUsers: [User]!
    me: User
  }

  type Mutation {
    createAuthor(name: String!): Author!
    addPhotoToAuthor(id: String!, image: String!): Author!
    createBook(
      title: String!
      sinopsis: String!
      release_date: String
      authorId: String!
    ): Book
    signUp(username: String!, password: String!): User
    signIn(username: String!, password: String!): Token
  }
`;

export default typeDefinitions;
