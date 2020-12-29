import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import SortBy from './sortByComponent';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
      width: '100%',
      margin: 10,

    },
  });

const Characters = () => {

    const classes = useStyles();

    const charactersData = [
        {
            name: 'death1',
            occupation: 'cause1',
            status: 'responsible1',
            birthday: 'lastWords1',
            image: 'image1',
            portrayer: 'portrayer1',
        },
        {
            name: 'death2',
            occupation: 'cause2',
            status: 'responsible2',
            birthday: 'lastWords2',
            image: 'image2',
            portrayer: 'portrayer2',
        },
        {
            name: 'death3',
            occupation: 'cause3',
            status: 'responsible3',
            birthday: 'lastWords3',
            image: 'image3',
            portrayer: 'portrayer3',
        },
        {
            name: 'death4',
            occupation: 'cause4',
            status: 'responsible4',
            birthday: 'lastWords4',
            image: 'image4',
            portrayer: 'portrayer4',
        },
        {
            name: 'death5',
            occupation: 'cause5',
            status: 'responsible5',
            birthday: 'lastWords5',
            image: 'image5',
            portrayer: 'portrayer5',
        },
        {
            name: 'death6',
            occupation: 'cause6',
            status: 'responsible6',
            birthday: 'lastWords6',
            image: 'image6',
            portrayer: 'portrayer6',
        },
    ];  
    return(
        <>
            <SortBy></SortBy>
            <Grid container={true} justify='space-evenly' direction='row' alignItems="center" spacing={4}>
                    {
                        charactersData.map((character, index)=>{
                            return(
                                <Grid item xs={4}>
                                    <Card className={classes.root} key={index}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="100"
                                            image={character.image}
                                            title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {character.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {character.occupation}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {character.status}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {character.birthday}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {character.portrayer}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
            </Grid>     
        </>
    );
}

export default Characters;