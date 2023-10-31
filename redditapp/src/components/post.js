import React from 'react';
import '../styles/Post.css';

const Post = ({ post }) => {
  const imageUrl = post.data.preview?.images[0]?.source?.url || post.data.thumbnail;

  return (
    <div className="reddit-card">
      <div className="reddit-content">
        <div className="vote-section">
          <div className="upvote">↑</div>
          <div className="vote-count">{post.data.ups}</div>
          <div className="downvote">↓</div>
        </div>
        <div className="post-content">
            {imageUrl && imageUrl !== 'self' && imageUrl !== 'default' && (
                <img src={imageUrl} alt={post.data.title} />
            )}
            <div className="post-title">{post.data.title}</div>
        </div>
      </div>
      <div className="reddit-footer">
          Posted by <span className="poster-name">{post.data.author}</span> {post.data.created_utc}
      </div>
    </div>
  )
};

export default Post;