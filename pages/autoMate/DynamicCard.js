import * as React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import { MoreVertOutlined, TouchApp } from '@material-ui/icons';
import styles from '../../styles/Home.module.css';



export default function DynamicCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <Card sx={{ maxWidth: 200 }}  className={styles.adminCard}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {props.avatar}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertOutlined />
                    </IconButton>
                }
                
                title={props.header}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.mainContent}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <TouchApp />
                </IconButton>
            </CardActions>
        </Card>
    );
}
