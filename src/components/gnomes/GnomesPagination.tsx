import React, { useState } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import { createMuiTheme, makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    pagination: () => ({
      '& button': {
      border: ' 1px solid #C0C0C0',
      margin: '0 2.5px',
      //color: 'black',
      }
    }),
  }),
);

const GnomesPagination = ( gnomesPerPage:any, filteredGnomes: any, paginate:any ) => {
    const classes = useStyles();
    const [offsetPage, setOffset] = useState(6);
    const theme = createMuiTheme();

    const handleClick = (offsetPage:any, gnomesPerPage:any, page:number) => {
        setOffset(offsetPage);
        gnomesPerPage.paginate(page);
      }
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          className={classes.pagination}
          limit={gnomesPerPage.gnomesPerPage}
          offset={offsetPage}
          total={gnomesPerPage.filteredGnomes}
          onClick={(e, offset, page:number) => handleClick(offset, gnomesPerPage, page)}
        />
      </MuiThemeProvider>

    )
}

export default GnomesPagination;

