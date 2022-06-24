import { GraphQLError, GraphQLFieldConfig } from 'graphql';

export const createClaimsSchedulerMaster = (
  permissionId: string | undefined,
  unity: Unity,
): GraphQLFieldConfig<any, Context, any> => ({
  type: ClaimsSchedulerMaster,
  args: {
    schedulerMaster: {
      type: ClaimsSchedulerMasterConfigInput,
    },
  },
  resolve: async (_parent, args, context: Context) => {
    console.log('permission id: ', permissionId);
    const isValid = await isAuthorised({
      permission: 'createClaimsSchedulerMaster',
      permissionId,
      unity,
      context,
    });
    if (!isValid) {
      throw new GraphQLError(`Unauthorised`);
    }
    return createMasterSchedulerResolver(args);
  },
});
