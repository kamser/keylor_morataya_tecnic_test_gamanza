import React from 'react';
import Typography from '@material-ui/core/Typography';
import Deaths from './deathsComponent/index';
import Characters from './charactersComponent/index';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
    return(
        <>
            <Container>
                <Typography>Hola desde Home</Typography>
                <Grid container={true} justify='space-between'>
                    <Grid item={true} xs={8}>
                        <Characters/>
                    </Grid>
                    <Grid item={true} xs={4}>
                        <Deaths/>
                    </Grid>
                </Grid>  
            </Container>
        </>
    );
}

export default HomePage;