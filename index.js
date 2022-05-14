import { ApolloServer } from "apollo-server";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import typeDefinitions from "./gql/type_definitions.js";
import resolvers from "./gql/resolvers.js";
import "./mongo.js";
import User from "./models/user.js";

dotenv.config({ silent: process.env.NODE_ENV === "production" });

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    if (auth && auth.toLowerCase().startsWith("bearer")) {
      const token = auth.substring(7);
      const SECRET_JWT = `${process.env["SECRET_JWT"]}`;
      const { id } = jwt.verify(token, SECRET_JWT);
      const currentUser = await User.findById(id);
      return { currentUser };
    }
  },
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`Servidor preparado en ${url}`))
  .catch((error) => console.error(error));
