import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosAPIS = createApi({
  reducerPath: "todosAPIS",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/todos`,
    }),

    getTodoBy: builder.query({
        query: (todoId) => `/todos/${todoId}`,
      }),


  }),
});
export const { useGetTodosQuery, useGetTodoByQuery } = todosAPIS;
