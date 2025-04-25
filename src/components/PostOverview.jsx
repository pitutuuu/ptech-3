import { Card, CardContent, CardMedia, Typography, Stack, Chip} from '@mui/material'
import { Link } from 'react-router-dom'

const PostOverview = (props) => {
    const body = props.body.substr(0, 400)

    return (
        <Card>
            <CardMedia component="img" height="200" image={props.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component={Link} to={`post/${props.slug}`}>
                    {props.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-wrap'}}>
                    {body}... <Link to={`post/${props.slug}`}>więcej</Link>
                </Typography>

                <Stack direction="row" spacing={1} sx={{ marginTop: 2}}>
                    {props.tags.map(tag => (
                        <Chip key={tag} label={tag} variant="outlined" color="primary" />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default PostOverview