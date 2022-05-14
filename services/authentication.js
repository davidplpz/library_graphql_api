import { AuthenticationError } from "apollo-server";

const authenticated = (context) => {
  const { currentUser } = context;
  if (!currentUser) {
    throw new AuthenticationError("Usuario no identificado");
  }
};

export default authenticated;
