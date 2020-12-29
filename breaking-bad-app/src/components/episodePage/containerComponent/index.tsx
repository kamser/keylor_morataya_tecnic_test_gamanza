import React from 'react';
import EpisodeCard from '../episodeCardComponent/index';
import Grid from '@material-ui/core/Grid';


const Container = () => {

    const seasonEpisodesData = [
        {
            title: 'title',
            season: 'season',
            episode: 'episode',
            airDate: 'airDate',
        },
        {
            title: 'title2',
            season: 'season2',
            episode: 'episode2',
            airDate: 'airDate2',
        },
        {
            title: 'title3',
            season: 'season3',
            episode: 'episode3',
            airDate: 'airDate3',
        },
        {
            title: 'title4',
            season: 'season4',
            episode: 'episode4',
            airDate: 'airDate4',
        },
        
    ];
    return(
        <>
            <Grid>
                {
                    seasonEpisodesData.map((episodeData, index) => {
                        return(
                            <Grid key={index}>
                                <EpisodeCard title={episodeData.title} season={episodeData.season} episode={episodeData.episode} airDate={episodeData.airDate}/>
                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </>
    );
}

export default Container;