import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { idText } from 'typescript';


const Deaths = () => {
    let deathCounter: number = 0;
    const deathsData = [
        {
            death: 'death1',
            cause: 'cause1',
            responsible: 'responsible1',
            lastWords: 'lastWords1',
        },
        {
            death: 'death2',
            cause: 'cause2',
            responsible: 'responsible2',
            lastWords: 'lastWords2',
        },
        {
            death: 'death3',
            cause: 'cause3',
            responsible: 'responsible3',
            lastWords: 'lastWords3',
        },
        {
            death: 'death4',
            cause: 'cause4',
            responsible: 'responsible4',
            lastWords: 'lastWords4',
        },
        {
            death: 'death5',
            cause: 'cause5',
            responsible: 'responsible5',
            lastWords: 'lastWords5',
        },
    ];

    return(
        <>  
            <Typography variant='h6' component='h2'>TOTAL DEATHS: {deathCounter} </Typography>
            <Typography variant='h5'>DEATHS</Typography>
            {
                deathsData.map((deathInfo, id) => {
                    return(
                        <Grid item key={id}>
                            <Paper style={
                                {height: 105, 
                                width: '100%',
                                backgroundColor: '#ffff',
                                margin: 10,
                                }
                                    }> 
                                <Typography>Death: {deathInfo.death}</Typography>
                                <Typography>Cause: {deathInfo.cause}</Typography>
                                <Typography>Responsible: {deathInfo.responsible}</Typography>
                                <Typography>Last words: {deathInfo.lastWords}</Typography>
                            </Paper>
                        </Grid>);
                    }
                )
            }
        </>
    );
}

export default Deaths;