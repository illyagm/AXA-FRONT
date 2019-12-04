import React, { useState, useEffect, useRef } from 'react'
import Gnomes from './gnomes/Gnomes'
import GnomeService from '../services/gnomes/GnomeService';
import { TextField, makeStyles, Box} from '@material-ui/core';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { IGnome } from '../models/IGnome';
import SpinnerComponent from './gnomes/SpinnerComponent';
import GnomesPagination from './gnomes/GnomesPagination';
import BrastlewarkWelcome from './gnomes/BrastlewarkWelcome';
import 'typeface-roboto';

const MainComponent = () => {


    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            margin: '0 20% 0 20%',
          
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            backgroundColor: '#000000',
        },
        styling: {
            textAlign: 'center',
            marginTop: '0.5 rem',
            fontSize: '25px',
        },
        InputField: {
            width: '100%',
        },
        cardsWrapper: {
            padding: '40px 0',
        }

    }));
    const classes = useStyles();

    const gnomeService = new GnomeService();
    const [loading, setLoading] = useState(false);
    const [gnomes, setGnomes] = useState([]);
    const [filteredGnomes, setFilteredGnomes] = useState([]);
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [gnomesPerPage] = useState(12);
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
    const Title = styled.h3`
        margin: 20px 0;
    `
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.styling}>
                    <Title>Brastlewark</Title>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField inputRef={inputName} className={classes.InputField} id="standard-basic" label="Filter by Name" onChange={(e: any) => filterGnomes(e, 'name')} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField inputRef={inputAge} className={classes.InputField} id="standard-basic" label="Filter by Age" onChange={(e: any) => filterGnomes(e, 'age')} />
                </Grid>
                <Grid item xs={12} md={2}>
                    <TextField inputRef={inputAge} className={classes.InputField} id="standard-basic" label="Filter by Age" onChange={(e: any) => filterGnomes(e, 'age')} />
                </Grid>
                <p />
            </Grid>
            <div>
                <Grid container spacing={6} className={classes.cardsWrapper}>
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