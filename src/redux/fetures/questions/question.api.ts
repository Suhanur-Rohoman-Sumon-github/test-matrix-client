import { baseApi } from "../../api/baseApi";

export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
  area: string;
  category: string; 
  
}

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createQuestion: builder.mutation<Question, Partial<Question>>({
      query: (questionData) => ({
        url: "/questions",
        method: "POST",
        body: questionData,
      }),
    }),
    getAllQuestions: builder.query({
  query: (categoryId?: string) => ({
    url: "/questions",
    method: "GET",
    params: categoryId ? { category: categoryId } : {},  
  }),
}),
    getSingleQuestion: builder.query<Question, string>({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "GET",
      }),
    }),
    updateQuestion: builder.mutation<Question, Partial<Question> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/questions/${id}`,
        method: "PATCH",
        body: patch,
      }),
    }),
    deleteQuestion: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateQuestionMutation,
  useGetAllQuestionsQuery,
  useGetSingleQuestionQuery,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
} = questionApi;
