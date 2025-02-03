import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: nanoid(),
      title: "Getting Started with React",
      content:
        "React is a popular JavaScript library for building user interfaces.",
    },
    {
      id: nanoid(),
      title: "Understanding Redux Toolkit",
      content:
        "Redux Toolkit simplifies state management in React applications.",
    },
    {
      id: nanoid(),
      title: "Tailwind CSS: A Utility-First Framework",
      content:
        "Tailwind CSS provides a fast way to style applications with utility classes.",
    },
    {
      id: nanoid(),
      title: "JavaScript ES6 Features",
      content:
        "ES6 introduced features like arrow functions, template literals, and destructuring.",
    },
  ],
  blogForm: {
    title: "",
    content: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { name, value } = action.payload;
      state.blogForm[name] = value;
      // console.log('name', name, 'value', value);
    },
    createBlog: (state) => {
      const newBlog = {
        id: nanoid(),
        title: state.blogForm.title,
        content: state.blogForm.content,
      };
      state.blogs.push(newBlog);
      state.blogForm = { title: "", content: "" };
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { updateForm, createBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
