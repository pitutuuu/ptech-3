import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Posts from './pages/Posts';
import Layout from './Layout';
import Post from './pages/Post';
import { Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useColorMode } from './contexts/ColorModeContext'


const App = () => {
    const colorMode = useColorMode()
    
    const theme = createTheme({
        palette: {
            mode: colorMode.colorMode
        }
    })

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

export default App;