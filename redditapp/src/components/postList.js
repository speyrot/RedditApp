import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync } from '../redux/actions/postsActions';
import Post from './post';
import '../styles/postList.css';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAsync('all'));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="post-list-container">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;