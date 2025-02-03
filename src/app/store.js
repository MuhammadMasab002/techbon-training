import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counter/countSlice";

export const store = configureStore({
  // reducer: todoReducer
  reducer: {
    todo: todoReducer,
    count: countReducer,
  },
  //devTools: true, // Enable Redux DevTools in development mode
});
