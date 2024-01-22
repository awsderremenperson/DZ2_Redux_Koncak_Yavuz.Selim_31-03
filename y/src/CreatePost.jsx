// CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ navigate }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreatePost = async () => {
        try {
            const response = await axios.post('https://dummyjson.com/posts', {
                title,
                body,
            });

            // Assuming the response includes the created post details
            console.log('Post created:', response.data);

            // Redirect to the PostsList page
            navigate('/posts');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <br />
            <label>
                Body:
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </label>
            <br />
            <button onClick={handleCreatePost}>Create Post</button>
        </div>
    );
};

export default CreatePost;
