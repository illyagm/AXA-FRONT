import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core';
import GnomesModal from './GnomesModal';
import { IModalGnomeProps } from '../../interfaces/IModalGnomeProps';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Gnomes = (gnomeProps: IModalGnomeProps, loading:boolean) => {
    const classes = useStyles();

/*
    if(loading){
        return <h2>Loading...</h2>;
    } 
    */
    return (
        <Grid item xs={2}>
            <Paper className={classes.paper}>
                <p>{gnomeProps.name}</p>
                <p>{gnomeProps.age}</p>
                <GnomesModal propModalData = {gnomeProps} />
            </Paper>
        </Grid>
    )
}
export default Gnomes;