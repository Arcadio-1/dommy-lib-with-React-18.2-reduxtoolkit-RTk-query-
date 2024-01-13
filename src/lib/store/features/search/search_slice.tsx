import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.search;

export default searchSlice.reducer;
