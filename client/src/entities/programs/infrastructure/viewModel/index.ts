import { PROGRAM_ENTITY } from "@entities/programs";
import { ApiPagination } from "@shared-frontend";

export const useViewModel = () => {
  const { restApiClient } = PROGRAM_ENTITY;

  const listQuery = ({ limit = 10, offset = 10 }: Partial<ApiPagination>) =>
    restApiClient().useListQuery({ limit, offset });
  const readQuery = (id: string | number) => restApiClient().useReadQuery(id);
  const [createProgram] = restApiClient().useCreateMutation();
  const [updateProgram] = restApiClient().useUpdateMutation();
  const [deleteProgram] = restApiClient().useDeleteMutation();

  return {
    listPrograms: listQuery,
    readProgram: readQuery,
    createProgram,
    updateProgram,
    deleteProgram,
  };
};
