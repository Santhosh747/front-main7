import React from 'react';

const Post = ({ post }) => {
  return (
    <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #34cc54', borderRadius: '5px' }}>
      <img src={post.photo} alt={post.caption} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1rem' }} />
      <h3>{post.caption}</h3>
      <p>Location: {post.location}</p>
      <p>Category: {post.postType}</p>
      <p>Username: {post.username}</p>
      <p>Created At: {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Post;
