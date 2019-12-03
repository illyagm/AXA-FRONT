import React, { useState } from 'react'
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import { createMuiTheme} from "@material-ui/core/styles";

const GnomesPagination = ( gnomesPerPage:any, filteredGnomes: any, paginate:any ) => {

    const [offsetPage, setOffset] = useState(6);
    const theme = createMuiTheme();

    const handleClick = (offsetPage:any, gnomesPerPage:any, page:number) => {
        setOffset(offsetPage);
        gnomesPerPage.paginate(page);
      }


    console.log(gnomesPerPage.filteredGnomes);
    return (
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={gnomesPerPage.gnomesPerPage}
          offset={offsetPage}
          total={gnomesPerPage.filteredGnomes}
          onClick={(e, offset, page:number) => handleClick(offset, gnomesPerPage, page)}
          id='2'
        />
      </MuiThemeProvider>

    )
}

export default GnomesPagination;

