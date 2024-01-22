// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './PostsList';
import CreatePost from './CreatePost';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/posts" element={<PostsList />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </Router>
    );
};

export default App;
