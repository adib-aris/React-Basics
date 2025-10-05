const PostItem = ({ posts, handleDelete, loading, error }) => {
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {posts.map((post) => (
        <div key={post.id} className="p-6 border-b">
          <div className="mb-4 flex justify-between items-start">
            <div>
              <h2 className="font-bold -mb-2 text-lg text-indigo-500">
                {post.title}
              </h2>
              <small className="text-gray-500 text-xs">
                Posted on: {new Date(post.created_at).toLocaleString()}
              </small>
            </div>
            <button
              className="h-6 w-6 bg-red-500 text-white rounded-full"
              onClick={() => handleDelete(post.id)}
            >
              X
            </button>
          </div>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default PostItem;
