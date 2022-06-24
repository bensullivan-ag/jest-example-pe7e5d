import { GraphQLFieldConfig } from 'graphql';
import { Foo, DemoInput } from './types';
import resolve from './resolver';

export const demoMutationType = (): GraphQLFieldConfig<any, any> => ({
  type: Foo,
  args: {
    schedulerMaster: {
      type: DemoInput,
    },
  },
  resolve: resolve,
});
