import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInputObjectType,
} from 'graphql';

export const Foo = new GraphQLObjectType({
  name: 'Foo',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

export const DemoInput = new GraphQLInputObjectType({
  name: 'DemoInput',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});
