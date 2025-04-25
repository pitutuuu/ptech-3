import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND } from "../config";
import { Stack } from "@mui/material";
import PostOverview from "../components/PostOverview";
import LinearProgress from "@mui/material/LinearProgress";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const url = `${BACKEND}/posts`
        setLoading(true)
        axios.get(url).then((response) => {
            setPosts(response.data)
        }).catch(() => {
            setPosts([])
        }).finally(() => {
            setLoading(false)
        })
        }, [])

    if (loading) {
        return (
        <LinearProgress />
        )
        }

    return (
        <Stack spacing={2}>
            {posts.map(post => (
            <PostOverview
                key={post.slug}
                title={post.title}
                slug={post.slug}
                body={post.body}
                image={post.image}
                tags={post.tags}
            />
            ))}
        </Stack>
        );
};

export default Posts;