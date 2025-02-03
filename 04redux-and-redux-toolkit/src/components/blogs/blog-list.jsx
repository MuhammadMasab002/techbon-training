import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../features/blog/blogSlice";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs); // Get blogs from Redux
  const dispatch = useDispatch();

  return (
    <div className="mt-10 bg-amber-500 px-3 py-4 w-full">
      <h1 className="text-2xl font-bold mb-4">Blogs List</h1>
      {blogs.length === 0 ? (
        <p className="text-white">No blogs available.</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="bg-white p-4 rounded shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-bold text-indigo-700">
                  {blog.title}
                </h2>
                <p className="text-gray-700">{blog.content}</p>
              </div>
              <button
                onClick={() => dispatch(deleteBlog(blog.id))}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
