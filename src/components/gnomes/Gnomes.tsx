import React from 'react'
import { Grid, Paper, makeStyles, CardHeader, Avatar, IconButton } from '@material-ui/core';
import GnomesModal from './GnomesModal';
import { IModalGnomeProps } from '../../interfaces/IModalGnomeProps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red, deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      avatar: {
        backgroundColor: red[500],
      },
      orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
      },
}));

const capitalizeFirstLetter = (gnomeName: string) => {
    return gnomeName.charAt(1).toUpperCase();
    
}

const Gnomes = (gnomeProps: IModalGnomeProps, loading:boolean) => {
    const classes = useStyles();

    /*
    if(loading){
        return <h2>Loading...</h2>;
    } 
    */
    return (
        <Grid item xs={12} md={3}>

            <Paper className={classes.paper}>
            <Avatar className={classes.orange}>{capitalizeFirstLetter(JSON.stringify(gnomeProps.name))}</Avatar>
                <p>{gnomeProps.name}</p>
                <p>{gnomeProps.age}</p>
                <GnomesModal propModalData = {gnomeProps} />
            </Paper>
        </Grid>
    )
}
export default Gnomes;