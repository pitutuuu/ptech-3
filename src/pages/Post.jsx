import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { LinearProgress, Typography } from '@mui/material'
import PostComponent from '../components/PostDetails'
import { BACKEND } from '../config' 
import PostDetails from '../components/PostDetails'


const Post = () => {
    const { slug } = useParams()
    const [ post, setPost ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        const url = `${BACKEND}/posts/${slug}`
        setLoading(true)
        axios.get(url).then((response) => {
            setPost(response.data)
        }).catch(() => {
            setPost(null)
        }).finally(() => {
            setLoading(false)
        })
        }, [])

        if (loading) {
            return (
                <LinearProgress />
            )
        }

        if (!post) {
            return (
                <Typography variant="h1" align="center">
                    Taki post nie istnieje!
                </Typography>
            )
        }

    return (
        <PostDetails
            title={post.title}
            slug={post.slug}
            author={post.author}
            posted={post.posted}
            body={post.body}
            image={post.image}
            tags={post.tags}
        />
    )
  }
  
export default Post;