import { gql } from "apollo-server";

const typeDefinitions = gql`
  type Author {
    id: ID!
    name: String!
  }

  type Book {
    isbn: ID!
    title: String!
    sinopsis: String!
    release_date: String!
    author: Author!
  }

  type Query {
    countAuthors: Int!
    countBooks: Int!
  }
`;

export default typeDefinitions;
