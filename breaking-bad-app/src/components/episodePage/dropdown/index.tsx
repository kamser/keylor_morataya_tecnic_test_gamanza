import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);


const DropdownSection = () => {

    const classes = useStyles();
    const [state, setState] = React.useState<{ age: string | number; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const name = event.target.name as keyof typeof state;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };

    return(
        <div>
            <Typography variant='h5'>
                FILTER
            </Typography>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Seasons</InputLabel>
                <Select
                    native
                    value={10}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={1}>First season</option>
                    <option value={2}>Second season</option>
                    <option value={3}>Thirt season</option>
                    <option value={4}>Fourth season</option>
                    <option value={5}>Fifth season</option>
                </Select>
            </FormControl>

        </div>
    );
};

export default DropdownSection;