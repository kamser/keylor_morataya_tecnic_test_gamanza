import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

interface propsEpisodeCard{
    title: string;
    season: string;
    episode: string;
    airDate: string;
}

const EpisodeCard = (props: propsEpisodeCard) => {
    const {title, season, episode, airDate} = props;
    return(
        <>
            <Grid>
                <Grid>
                    <Paper>
                        <Typography variant='h6'>{title}</Typography>
                        <Typography variant='h6'>{season}</Typography>
                        <Typography variant='h6'>{episode}</Typography>
                        <Typography variant='h6'>{airDate}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}

export default EpisodeCard;