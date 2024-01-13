import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { apiSliceAllbooks } from "../books_api/books-api-slice";

interface ListState {
  books: string[];
}

const initialState: ListState = {
  books: [],
};

const listSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.books = [...state.books, action.payload];
    },
    remove(state, action: PayloadAction<string>) {
      state.books = state.books.filter((book) => book !== action.payload);
    },
  },
});

export const { add, remove } = listSlice.actions;
export default listSlice.reducer;

export const selectedBooks = createSelector(
  (state: RootState) =>
    apiSliceAllbooks.endpoints.fetchAllBooks.select(undefined)(state)?.data,
  (state: RootState) => state.list,
  (state: RootState) => state.search,
  (books, list, search) =>
    (books || []).filter(
      (books) =>
        list.books.includes(books.id) &&
        books.title.toLowerCase().includes(search.search.toLowerCase())
    )
);
