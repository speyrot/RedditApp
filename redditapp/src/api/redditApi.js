// src/api/redditApi.js
export const fetchPosts = async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data.data.children;
};
  