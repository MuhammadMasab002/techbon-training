import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../features/todo/todoSlice";
import countReducer from "../features/counter/countSlice";
import blogReducer from "../features/blog/blogSlice";

export const store = configureStore({
  // reducer: todoReducer
  reducer: {
    todo: todoReducer,
    count: countReducer,
    blog: blogReducer
    
  },
  //devTools: true, // Enable Redux DevTools in development mode
});
