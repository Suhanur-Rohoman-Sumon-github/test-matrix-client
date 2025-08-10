import { baseApi } from "../../api/baseApi";
import { TUser } from "../auth/auth.slice";

export interface UserCreatePayload {
  name: string;
  email: string;
  password: string;
  role?: "student" | "admin" | "supervisor";
}

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<TUser, UserCreatePayload>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/users/allUser",
        method: "GET",
      }),
    }),

    getSingleUser: builder.query<TUser, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),

    updateUser: builder.mutation<TUser, Partial<TUser> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),

    deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),

    updateUserStepProgress: builder.mutation<TUser, { userId: string; score: number }>({
      query: ({ userId, score }) => ({
        url: `/users/${userId}/step-progress`,
        method: "PUT",
        body: { score },
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdateUserStepProgressMutation,
} = usersApi;
