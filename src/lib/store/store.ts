import { configureStore } from "@reduxjs/toolkit";
import { apiSliceAllbooks } from "./features/books_api/books-api-slice";
import listReducer from "./features/list/list-slice";
import searchSlice from "./features/search/search_slice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    list: listReducer,
    [apiSliceAllbooks.reducerPath]: apiSliceAllbooks.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSliceAllbooks.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
