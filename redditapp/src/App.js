// src/App.js
import React from 'react';
import PostList from './components/postList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="app-title">ReddTok</div>  
      <div className="post-container"> 
        <PostList />
      </div>  
    </div>
  );
}

export default App;


