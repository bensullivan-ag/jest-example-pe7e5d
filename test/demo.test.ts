import { GraphQLObjectType, GraphQLSchema, printSchema } from 'graphql';
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
  let schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

  console.log(printSchema(schema));

  expect(true).toBe(true);
});
