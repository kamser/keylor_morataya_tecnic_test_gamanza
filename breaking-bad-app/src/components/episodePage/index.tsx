import React from 'react';
import DropdownSection from './dropdown/index';
import Grid from '@material-ui/core/Grid';


const EpisodePage = () => {
    return(
        <>
            <Grid container={true} justify='flex-start'>
                <Grid item={true}>
                    <DropdownSection/>
                </Grid>
            </Grid>
            
        </>
    );
}

export default EpisodePage;