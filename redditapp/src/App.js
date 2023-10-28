import React from 'react';
import PostList from './components/postList';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-title">ReddTok</div>  
      <div className="post-container"> 
        <PostList />
      </div>  
      <footer className="app-footer">
        © 2023 ReddTok
      </footer>
    </div>
  );
}

export default App;


