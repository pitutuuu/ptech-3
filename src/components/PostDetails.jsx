import { Card, CardContent, CardMedia, Typography, Stack, Chip} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';

const PostDetails = (props) => {

    return (
        <Card>
            <CardMedia component="img" height="200" image={props.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    <Stack direction="row" spacing={2}>
                        <CalendarMonthIcon fontSize="small" />
                        <Typography>{props.posted}</Typography>
                        <PersonIcon fontSize="small" />
                        <Typography>{props.author}</Typography>
                    </Stack>
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-wrap'}}>
                    {props.body}
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

export default PostDetails