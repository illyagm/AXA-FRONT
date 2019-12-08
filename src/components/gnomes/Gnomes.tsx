import React from 'react'
import { Grid, makeStyles, CardHeader, Card } from '@material-ui/core';
import styled from "styled-components";
import GnomesModal from '../gnomesModal/GnomesModal';
import { IModalGnomeProps } from '../gnomesModal/IModalGnomeProps';
import { red, deepOrange, deepPurple } from '@material-ui/core/colors';

interface avatarColor {
  hairColor: string,
}

const AvatarColor = styled.div<avatarColor>`
    background: ${(props: { hairColor: any; }) => props.hairColor};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;`

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
    paddingTop: '56.25%',
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

const Gnomes = (gnomeProps: IModalGnomeProps, loading: boolean) => {
  const classes = useStyles();
  
  return (
    <Grid item xs={12} md={3}>
       <Card className={classes.card}>
      <CardHeader
        avatar={
          <AvatarColor hairColor={gnomeProps.hair_color as string}>{capitalizeFirstLetter(JSON.stringify(gnomeProps.name))}</AvatarColor>
        }
        title={gnomeProps.name}
        subheader={gnomeProps.age}
      />
        <GnomesModal propModalData={gnomeProps} />
      </Card>
    </Grid>
  )
}
export default Gnomes;
