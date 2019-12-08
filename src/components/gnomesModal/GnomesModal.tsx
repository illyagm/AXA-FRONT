import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { red } from '@material-ui/core/colors';
import styled from "styled-components";

import { Button, Card, CardActionArea, CardMedia, CardContent, Typography, ListItem } from '@material-ui/core';
function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    
    paper: {
        position: 'absolute',
        width: '400px',
    },
    root: {
        width: '100%',
        maxWidth: 360,
    },
    card: {
        maxWidth: 500,
      },
      media: {
        height: '300px',
        backgroundPositionY: '30%',
        
      },
      avatar: {
        backgroundColor: red[500],
      },
      buttonStyle: {
          color: 'black',
          background: '#D7D0CD',
          marginLeft: '35%',
          marginBottom: '10%'
      },
      proffesions: {
        display: 'flex',
        flexDirection: 'column',
      },
      listItem: {
        width: 'auto!important',
        padding: '2px 15px',
        margin: '5px',
        color: 'black',
      },
      professionItem: {
        backgroundColor: '#D7D0CD',
        borderRadius: '20px',
      },
      personalDataItem: {
        fontWeight: 500,
        '& span': { 
            fontWeight: '900',
            textDecoration: 'underline',
            marginRight: '5px',
        },

      }
}));

const ContainerSection = styled.div `
    display: flex;
    justify-content: space-evently;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;`

const SectionTitle = styled.h3 `
    font-weight: 900;`

const GnomesModal = (propModalData: any) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
            <Button className={classes.buttonStyle} variant="outlined" onClick={handleOpen}>Detail</Button>
            <Modal open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper} >
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propModalData.propModalData.thumbnail}
                                title="Gnome thumbnail"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <SectionTitle>Personal Data </SectionTitle>
                                    <ListItem className={classes.personalDataItem}><span>Name: </span> { propModalData.propModalData.name} </ListItem>
                                    <ListItem className={classes.personalDataItem}><span>Age: </span> { propModalData.propModalData.age} </ListItem>
                                    <ListItem className={classes.personalDataItem}><span>Weight: </span> { propModalData.propModalData.weight} </ListItem>
                                    <ListItem className={classes.personalDataItem}><span>Height: </span> { propModalData.propModalData.height} </ListItem>
                                    <ListItem className={classes.personalDataItem}><span>Hair Color: </span> { propModalData.propModalData.hair_color} </ListItem>
                                </Typography>
                                <hr/>
                                <Typography className={classes.proffesions}variant="body2" color="textSecondary" component="p">
                                    <SectionTitle>Professions</SectionTitle> <ContainerSection>{propModalData.propModalData.professions.map((profession: any, key: string) => {
                                        return <ListItem className={classes.professionItem+' '+classes.listItem} key={key}>{profession}</ListItem>
                                    })}
                                    </ContainerSection> 
                                </Typography>
                                <hr/>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <SectionTitle>Friends</SectionTitle> <ContainerSection>{propModalData.propModalData.friends.map((friend: any, key: string) => {
                                        return <ListItem className={classes.listItem}key={key}>{friend}</ListItem>
                                    })}
                                    </ContainerSection>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Modal>
        </div>
    );
}

export default GnomesModal;
