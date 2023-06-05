import React, { useState } from "react";

const Posts = ({ posts, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  console.log("posts", posts);
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2>Second test</h2>
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.gifUrl}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
