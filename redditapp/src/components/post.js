import React from 'react';
import '../styles/Post.css';

const Post = ({ post }) => {
  const imageUrl = post.data.preview?.images[0]?.source?.url || post.data.thumbnail;

  return (
    <div className="post">
        <div className="post-title">{post.data.title}</div> 
        {imageUrl && imageUrl !== 'self' && imageUrl !== 'default' && (
          <img src={imageUrl} alt={post.data.title} className="post-image" />  
        )}
        <p>{post.data.author}</p>
        <p>{post.data.selftext}</p>
    </div>
  );
};

export default Post;