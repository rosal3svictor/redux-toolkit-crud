import {
  RegistrationRecordType,
  useLaunchConfigSelectors,
  useCCSCApiSlice,
  ApiPagination,
} from "@shared-frontend";
import { Interfaces } from "@entities/programs";

const provideTags = () => ({ providesTags: ["program"] });
const invalidatesTags = () => ({ invalidatesTags: ["program"] });

export const restApiClient = () => {
  const { getSiteId, getApplicationId } = useLaunchConfigSelectors();
  const { CCSCApiClient, ...rest } = useCCSCApiSlice("program");

  /* 
    REFERENCE TO DOCS
      - url: https://redux-toolkit.js.org/rtk-query/usage/code-splitting
      - target: Injecting & exporting additional endpoints

      - url: https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#providing-cache-data
      - target: Providing cache data

      - url: https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#invalidating-cache-data
      - target: Invalidating cache data

      - url: https://redux-toolkit.js.org/rtk-query/usage/queries
      - target: Queries

      - url: https://redux-toolkit.js.org/rtk-query/usage/mutations
      - target: Mutations
  */
  const programsApiClient = CCSCApiClient.injectEndpoints({
    endpoints: (build) => ({
      list: build.query<
        Array<RegistrationRecordType<Interfaces.Program>>,
        Partial<ApiPagination>
      >({
        query: (args) => {
          return `/registrations`;
        },
        ...provideTags(),
      }),
      read: build.query<
        RegistrationRecordType<Interfaces.Program>,
        string | number
      >({
        query: (id) => {
          return `/registrations/${id}`;
        },
        ...provideTags(),
      }),
      create: build.mutation<void, RegistrationRecordType<Interfaces.Program>>({
        query: (registrationRecord) => ({
          url: "/registrations",
          method: "POST",
          body: registrationRecord,
        }),
        ...invalidatesTags(),
      }),
      update: build.mutation<void, RegistrationRecordType<Interfaces.Program>>({
        query: ({ id, ...rest }) => ({
          url: `/registrations/${id}`,
          method: "PUT",
          body: rest,
        }),
        ...invalidatesTags(),
      }),
      delete: build.mutation<void, string | number>({
        query: (id) => ({
          url: `/registrations/${id}`,
          method: "DELETE",
        }),
        ...invalidatesTags(),
      }),
    }),
  });

  return {
    useListQuery: programsApiClient.useListQuery,
    useReadQuery: programsApiClient.useReadQuery,
    useCreateMutation: programsApiClient.useCreateMutation,
    useUpdateMutation: programsApiClient.useUpdateMutation,
    useDeleteMutation: programsApiClient.useDeleteMutation,
    ...rest,
  };
};
