import * as React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from '@material-ui/core';
import { ExpandMoreOutlined, Favorite, MoreVert, MoreVertOutlined, TouchApp } from '@material-ui/icons';
import styles from "../../styles/Home.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Aos from "aos";
import "aos/dist/aos.css";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function HomeCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
        Aos.init({
            duration:2000,
            throttleDelay: 99,
        })
    },[]);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ScrollAnimation animateIn="fadeIn">
            <Card sx={{ maxWidth: 345 }} className={styles.homeCard} data-aos="fade-left">
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            {props.avatar}
                        </Avatar>
                        }
                        // action={
                        // <IconButton aria-label="settings">
                        //     <MoreVert />
                        // </IconButton>
                        // }
                        title={props.position}
                        // subheader={props.candidate}
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {props.candidate} - {props.role}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                        <ExpandMoreOutlined />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph className={styles.cardBody}>
                                {props.positonDetails}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    </Card>
        </ScrollAnimation>
        
    );
}
