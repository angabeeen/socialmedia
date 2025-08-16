// src/components/Feed.js
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(querySnapshot.docs.map(doc => doc.data()));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='container feed'>
      <h2>Feed</h2>
      {posts.map((post, index) => (
        <div className='container post' key={index}>
          <h3>{post.user}</h3>
          <p>{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt="Post image" />}
        </div>
      ))}
      
       <Link to="/create-post">
          <button>Create Post</button>
        </Link>
       
    </div>
  );
};

export default Feed;
