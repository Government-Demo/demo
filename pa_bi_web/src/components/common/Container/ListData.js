import { configureStore, createSlice } from "@reduxjs/toolkit";

let item = createSlice({
  name: "item",
  initialState: [
    { id: 0, name: "White and Black" },
    { id: 1, name: "안녕" },
    { id: 2, name: "Grey Yordan" },
  ],
});

export default configureStore({
  reducer: {
    item: item.reducer,
  },
});
