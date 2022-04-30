import { ApolloServer } from "apollo-server";
import typeDefinitions from "./gql/type_definitions.js";
import resolvers from "./gql/resolvers.js";
import "./mongo.js";

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Servidor preparado en ${url}`))
  .catch((error) => console.error(error));
