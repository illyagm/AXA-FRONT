import React, { useState, useEffect, useRef } from 'react'
import Gnomes from './gnomes/Gnomes'
import GnomeService from '../services/gnomes/GnomeService';
import { TextField, makeStyles, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { IGnome } from '../models/IGnome';
import SpinnerComponent from './gnomes/SpinnerComponent';
import GnomesPagination from './gnomes/GnomesPagination';
import 'typeface-roboto';

const MainComponent = () => {


    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            margin: '0 20% 0 20%',
            fontFamily: 'typeface-roboto'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        styling: {
            textAlign: 'center',
            marginTop: '0.5 rem',
            fontSize: '25px',
        }

    }));
    const classes = useStyles();

    const gnomeService = new GnomeService();
    const [loading, setLoading] = useState(false);
    const [gnomes, setGnomes] = useState([]);
    const [filteredGnomes, setFilteredGnomes] = useState([]);
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [gnomesPerPage, setGnomesPerPage] = useState(12);
    const indexOfLastPost = currentPage * gnomesPerPage;
    const indexOfFirstPost = indexOfLastPost - gnomesPerPage;
    const currentPosts = filteredGnomes.slice(indexOfFirstPost, indexOfLastPost);
    //change page
    const paginate = (pageNumber: any) => { setCurrentPage(pageNumber) };

    const inputName = useRef(null);
    const inputAge = useRef(null);
    const loadGnomesData = () => {
        setLoading(true);
        gnomeService.getAll().then(response => {
            setGnomes(response.data.Brastlewark);
            setFilteredGnomes(response.data.Brastlewark);
        });
        setLoading(false);
    };

    //el use effect sustituye al componentDidMount en los functional components - es lo que va a pasar antes de renderizar el componente.
    useEffect(
        () => {
            loadGnomesData();
        },
        //en los corchetes podemos indicar una variable, de manera que cada vez que cambie, se efectuará el useEffect
        [],
    );
    const spinnerInfo = () => {
        return <SpinnerComponent />
    }
    const filterGnomes = (e: any, propertyName: string) => {
        if (loading === false) {
            let filteredGnomesList: any = [];
            if ((inputName as any).current.value !== '' || (inputAge as any).current.value !== '') {
                filteredGnomesList = gnomes.filter(
                    (gnome: any) => gnome.age.toString().includes((inputAge as any).current.value)
                        && gnome.name.includes((inputName as any).current.value)
                );
            } else {
                filteredGnomesList = gnomes.filter((gnome: any) => gnome[propertyName].toString().includes(e.target.value));
            }
            setFilteredGnomes(filteredGnomesList);
        } else {
            spinnerInfo();
        }
    }

    return (

        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.styling}>
                    <h2>Gnomes component</h2>
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField inputRef={inputName} id="standard-basic" label="Gnome Name" onChange={(e: any) => filterGnomes(e, 'name')} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField inputRef={inputAge} id="standard-basic" label="Gnome Age" onChange={(e: any) => filterGnomes(e, 'age')} />
                </Grid>
                <p />
            </Grid>
            <div>
                <Grid container spacing={3}>
                    {currentPosts.length > 0 && currentPosts.map((gnome: IGnome, key: number) => {
                        return <Gnomes key={key} {...gnome} />
                    })}
                </Grid>
            </div>
            <p></p>
            <Box display="flex" justifyContent="center"><GnomesPagination gnomesPerPage={gnomesPerPage} filteredGnomes={filteredGnomes.length} paginate={paginate} /></Box>
        </div>
    )
}
export default MainComponent;