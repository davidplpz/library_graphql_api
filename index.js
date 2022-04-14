import { ApolloServer } from "apollo-server";
import typeDefinitions from "./gql/type_definitions.js";
import resolvers from "./gql/resolvers.js";
import "./mongo.js";

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Servidor preparado en ${url}`))
  .catch((error) => console.error(error));
