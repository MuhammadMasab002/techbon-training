import { useDispatch, useSelector } from "react-redux";
import { createBlog, updateForm } from "../../features/blog/blogSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const { title, content } = useSelector((state) => state.blog.blogForm);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(createBlog()); // Directly use Redux state to create blog
  }

  function handleChange(event) {
    dispatch(
      updateForm({
        name: event.target.name,
        value: event.target.value,
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-end gap-y-6">
          <div className="w-full flex justify-end items-center gap-2">
            <label htmlFor="title">Blog Title:</label>
            <input
              className="w-70 h-12 ml-2 px-2 border-2 rounded-xs focus:outline-0"
              type="text"
              id="title"
              name="title"
              placeholder="Enter blog title here..."
              onChange={handleChange}
              value={title}
            />
          </div>
          <div className="w-full flex justify-end items-center gap-2">
            <label htmlFor="content">Blog Content:</label>
            <textarea
              className="w-70 h-12 ml-2 px-2 border-2 rounded-xs focus:outline-0 pt-3"
              rows={4}
              id="content"
              name="content"
              placeholder="Enter blog content here..."
              onChange={handleChange}
              value={content}
            />
          </div>
          <div>
            <button
              className="text-md text-white rounded px-3 py-2 bg-indigo-500 hover:bg-indigo-600 hover:cursor-pointer"
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
