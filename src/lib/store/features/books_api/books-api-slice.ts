import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
import { Book } from "../../../../types/types";

export const apiSliceAllbooks = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/Arcadio-1/books",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchAllBooks: builder.query<Book[], void>({
        query() {
          return `/books`;
        },
      }),
      fetchBook: builder.query<Book, string>({
        query(id) {
          return `/books/${id}`;
        },
      }),
    };
  },
});

export const { useFetchAllBooksQuery, useFetchBookQuery } = apiSliceAllbooks;

export const allFilterdBooks = createSelector(
  (state: RootState) =>
    apiSliceAllbooks.endpoints.fetchAllBooks.select(undefined)(state)?.data,
  (state: RootState) => state.search,
  (books, search) =>
    (books || []).filter((books) =>
      books.title.toLowerCase().includes(search.search.toLowerCase())
    )
);
