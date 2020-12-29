import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const SortBy = () => {

    const constanteVectorCharacters = [
        {
            char_id: 1,
            name: "Walter White",
            birthday: "09-07-1958",
            occupation: [
                "High School Chemistry Teacher",
                "Meth King Pin"
            ],
            img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
            status: "Deceased",
            appearance: [1, 2, 3, 4, 5],
            nickname: "Heisenberg",
            portrayed: "Bryan Cranston"
        },
        {
            char_id: 4,
            name: "Walter White Jr.",
            birthday: "07-08-1993",
            occupation: [
                "Teenager"
            ],
            img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbA...",
            status: "Alive",
            nickname: "Flynn",
            appearance: [ 1, 2, 3, 4, 5 ],
            portrayed: "RJ Mitte",
            category: "Breaking Bad",
            better_call_saul_appearance: [ ]
        }
    ];
    const sortByName = () => {
        let inferiorIndex: number = 0;
        let alphabeticName: string;
        let auxiliarCharacter: any = {};
        let actualCharacter: any = {};
        let actualAlphabeticName: string;
        let indexWhereIsTheAlphabeticName: number = 0;

        for(let i = 0; i < constanteVectorCharacters.length; i++){
            actualCharacter = constanteVectorCharacters[i];
            alphabeticName = constanteVectorCharacters[i].name;
            for(let j = inferiorIndex; j < constanteVectorCharacters.length - 1; j++){
                actualAlphabeticName = constanteVectorCharacters[j+1].name;
                if(alphabeticName > actualAlphabeticName){
                    alphabeticName = actualAlphabeticName;
                    actualCharacter = constanteVectorCharacters[j+1];
                    indexWhereIsTheAlphabeticName = j+1;
                }
            }
            auxiliarCharacter = actualCharacter;
            constanteVectorCharacters[indexWhereIsTheAlphabeticName] = constanteVectorCharacters[inferiorIndex]
            constanteVectorCharacters[inferiorIndex] = auxiliarCharacter; 
            inferiorIndex++;
        }
        console.log(constanteVectorCharacters);
    }

    const sortByBirthday = () =>{
        let inferiorIndex: number = 0;
        let oldestBirthday: Date;
        let auxiliarCharacter: any = {};
        let oldestCharacter: any = {};
        let actualBirthday: Date;
        let indexWhereIsTheOldestCharacter: number = 0;

        for(let i = 0; i < constanteVectorCharacters.length; i++){
            oldestCharacter = constanteVectorCharacters[i];
            oldestBirthday = new Date(constanteVectorCharacters[i].birthday);
            for(let j = inferiorIndex; j < constanteVectorCharacters.length - 1; j++){
                actualBirthday = new Date(constanteVectorCharacters[j+1].birthday);
                if(oldestBirthday > actualBirthday){
                    oldestBirthday = actualBirthday;
                    oldestCharacter = constanteVectorCharacters[j+1];
                    indexWhereIsTheOldestCharacter = j+1;
                }
            }
            auxiliarCharacter = oldestCharacter;
            constanteVectorCharacters[indexWhereIsTheOldestCharacter] = constanteVectorCharacters[inferiorIndex]
            constanteVectorCharacters[inferiorIndex] = auxiliarCharacter; 
            inferiorIndex++;
        }
        console.log(constanteVectorCharacters);
    }

    return(
        <>
            <Grid container={true} justify='flex-start'>
                <Grid>
                    <Typography variant='h5' >SORT BY</Typography>
                    <ButtonGroup>
                        <Button onClick={sortByName}>Name</Button>
                        <Button onClick={sortByBirthday}>Birthday</Button>
                        <Button>Portrayer</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
            
        </>
    );
}

export default SortBy;