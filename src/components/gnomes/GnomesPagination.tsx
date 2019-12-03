/*
import React from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core';

const GnomesPagination = ( gnomesPerPage:any, filteredGnomes: any, paginate:any ) => {

    const pageNumbers = [];
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(1),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));
    for(let i = 1; i <= Math.ceil(gnomesPerPage.filteredGnomes / gnomesPerPage.gnomesPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(gnomesPerPage.filteredGnomes);
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <Grid container spacing={1}>
              {pageNumbers.map(number => (
                  <Grid item xs={1}>
                  <Paper className={classes.paper} key={number} onClick={() => gnomesPerPage.paginate(number)}>
                      
                          {number}
 
                  </Paper>
                  </Grid>
              ))}
      </Grid> 
      </div>
  )
  
  }
  
  export default GnomesPagination;
  */
  /*


    return (
      return (
        <div className={classes.root}>
        <Grid container spacing={1}>

        <Grid item xs={1}>
        <Paper disabled={currentNumber === 1} className={classes.paper} onClick={() => gnomesPerPage.paginate(currentNumber-1)}>
                <Icon icon={'arrow-left'}/>
        </Paper>
        </Grid>
                    <Grid item xs={1}>
                    <Paper className={classes.paper} onClick={() => gnomesPerPage.paginate(currentNumber)}>
                            {currentNumber}
                    </Paper>
                    </Grid>
                    <Grid item xs={1}>
                    <Paper className={classes.paper} onClick={() => gnomesPerPage.paginate(currentNumber+1)}>
                            {currentNumber+1}
                    </Paper>
                    </Grid>
                    <Grid item xs={1}>
                    <Paper className={classes.paper} onClick={() => gnomesPerPage.paginate(currentNumber+2)}>
                            {currentNumber+2}
                    </Paper>
                    </Grid>
                    <Grid item xs={1}>
                    <Paper disabled={currentNumber === pageNumbers.length} className={classes.paper} onClick={() => gnomesPerPage.paginate(currentNumber+1)}>
                            <Icon icon={'arrow-right'}/>
                    </Paper>
                    </Grid>
        </Grid> 
        </div>
    )


    )

  */
  
  /* 
  
  const [currentNumber, setCurrentNumber] = useState(1);
  
  */


import React, { useState } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import { createMuiTheme} from "@material-ui/core/styles";

const GnomesPagination = ( gnomesPerPage:any, filteredGnomes: any, paginate:any ) => {

    const [offsetPage, setOffset] = useState(6);
    const theme = createMuiTheme();

    const handleClick = (offsetPage:any, gnomesPerPage:any) => {
        setOffset(offsetPage);
        //gnomesPerPage.paginate(offsetPage);
      }


    console.log(gnomesPerPage.filteredGnomes);
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={gnomesPerPage.gnomesPerPage}
          offset={offsetPage}
          total={gnomesPerPage.filteredGnomes}
          onClick={(e, offset) => handleClick(offset, gnomesPerPage)}
          id='2'
        />
      </MuiThemeProvider>

    )
}

export default GnomesPagination;

