import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date(); // Get the current date and time
    console.log(date);
    const newPost = {
      title,
      body,
      created_at: date,
    };

    fetch("http://localhost:3000/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    }).then(() => navigate("/"));
  };
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="">Post title</label>
          <input
            type="text"
            name=""
            id=""
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label htmlFor="">Post content</label>
          <textarea
            name=""
            id=""
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">
          Create
        </button>
      </form>
    </>
  );
};

export default PostCreate;
