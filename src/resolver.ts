import { GraphQLError } from 'graphql';
import { collaborate } from './resolverCollaborator';

const resolve = async (_parent, args, context: any) => {
  const isValid = await collaborate();
  if (!isValid) {
    throw new GraphQLError(`Unauthorised`);
  }
  console.log("We've done the resolving!");
};

export default resolve;
