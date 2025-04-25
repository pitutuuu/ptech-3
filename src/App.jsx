import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/Posts';


const App = () => {
    return (
        <>
        <Menu />
        <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}

export default App;