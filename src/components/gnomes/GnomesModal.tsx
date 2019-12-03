import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
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
        width: 400,
    },
    root: {
        width: '100%',
        maxWidth: 360,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

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
    //console.log(JSON.stringify(propModalData))
    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleOpen}>Detail</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>

                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propModalData.propModalData.thumbnail}
                                title="Gnome thumbnail"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {propModalData.propModalData.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   <ListItem>Age {propModalData.propModalData.age} </ListItem>
                                   <ListItem>Weight {propModalData.propModalData.weight} </ListItem>
                                   <ListItem>Height {propModalData.propModalData.height} </ListItem>
                                   <ListItem>Hair Color {propModalData.propModalData.hair_color} </ListItem>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Professions</b> {propModalData.propModalData.professions.map((profession: any, key: string) => {
                                        return <ListItem key={key}>{profession}</ListItem>
                                    })}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Friends</b> {propModalData.propModalData.friends.map((friend: any, key: string) => {
                                        return <ListItem key={key}>{friend}</ListItem>
                                    })}
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


/*

          <List component="nav" className={classes.root} aria-label="contacts">
                    <ListItem button>
                        <ListItemText>
                        {propModalData.propModalData.name}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                         {propModalData.propModalData.age}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                        {propModalData.propModalData.weight}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                        {propModalData.propModalData.height}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText><PaletteIcon/></ListItemText>
                        <ListItemText>
                       {propModalData.propModalData.hair_color}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>
                            <WorkIcon/>
                        </ListItemText>
                        <ListItemText>
                            {propModalData.propModalData.professions.map(( profession: any, key: string) => {
                                return <p key={key}>{profession}</p>
                            })}
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText><PeopleIcon/></ListItemText>
                        <ListItemText>
                            {propModalData.propModalData.friends.map(( friend: any, key: string) => {
                                return <p key={key}>{friend}</p>
                            })}
                        </ListItemText>
                    </ListItem>
                </List>
*/