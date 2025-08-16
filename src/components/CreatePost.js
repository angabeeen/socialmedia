// src/components/CreatePost.js
import React, { useState } from 'react';
import { addDoc, collection } from '../firebase';
import { auth, db } from '../firebase';

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return alert('You must be logged in to create a post.');
    console.log({
        content: postContent,
        imageUrl: imageUrl,
        user: auth.currentUser.email,
        timestamp: new Date(),
      });
    try {
      await addDoc(collection(db, 'posts'), {
        content: postContent,
        imageUrl: imageUrl,
        user: auth.currentUser.email,
        timestamp: new Date(),
      });
      
      alert('Post created successfully!');
    } catch (error) {
      console.error("Error creating post: ", error.message);
    }
  };

  return (
    <div className='container create-post'>
      <h2>Create Post</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
    
  );
};

export default CreatePost;
