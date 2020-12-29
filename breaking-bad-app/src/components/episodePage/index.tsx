import React from 'react';
import DropdownSection from './dropdown/index';
import Grid from '@material-ui/core/Grid';
import Container from './containerComponent/index';


const EpisodePage = () => {
    return(
        <>
            <Grid container={true} justify='flex-start' direction='column'>
                <Grid item={true}>
                    <DropdownSection/>
                </Grid>
                <Grid item={true}>
                    <Container/>
                </Grid>
            </Grid>
            
        </>
    );
}

export default EpisodePage;