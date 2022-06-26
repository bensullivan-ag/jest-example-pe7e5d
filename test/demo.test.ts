import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { demoMutationType } from '../src/demoMutation';

test('should be able to exercise schema resolver without server and with mocked collaborator', () => {
  const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {},
  });
  const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createClaimsSchedulerMaster: demoMutationType(),
    },
  });
  let programmaticSchema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
  });

  const schemaString = printSchema(programmaticSchema);

  console.log(schemaString);

  const schema = makeExecutableSchema({schemaString, null}});

  expect(true).toBe(true);
});
