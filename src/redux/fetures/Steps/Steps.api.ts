import { baseApi } from "../../api/baseApi";
import { TUser } from "../auth/auth.slice";

export interface Category {
  id: string;
  name: string;
  // add other fields as needed
}

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (categoryData) => ({
        url: "/category",
        method: "POST",
        body: categoryData,
      }),
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/category",
        method: "GET",
      }),
    }),
    getSingleCategory: builder.query<Category, string>({
      query: (id) => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
    updateCategory: builder.mutation<Category, Partial<Category> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    deleteCategory: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),

    
}),
  })


export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  
} = categoryApi;
