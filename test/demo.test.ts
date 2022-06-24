import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  printSchema,
} from 'graphql';

test('xxx', () => {
  let userType = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
    },
  });

  // Define the Query type
  let queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: GraphQLString },
        },
        resolve: (_, { id }) => {
          console.log('Mooo!');
        },
      },
    },
  });

  let schema = new GraphQLSchema({ query: queryType });
  console.log(printSchema(schema));
  expect(true).toBe(true);
});
