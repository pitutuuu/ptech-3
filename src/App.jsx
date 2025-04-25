import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import Layout from './Layout';
import Post from './pages/Post';
import { Paper } from '@mui/material';


const App = () => {
    return (
        <>
        <Paper>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Posts />} />
                    <Route path="post/:slug" element={<Post />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Paper>
        </>
    )
}

export default App;