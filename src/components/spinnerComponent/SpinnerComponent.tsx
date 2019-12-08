import React from 'react'
import { IModalGnomeProps } from '../gnomesModal/IModalGnomeProps'
import { CircularProgress, makeStyles } from '@material-ui/core'

const SpinnerComponent = (gnomeProps: IModalGnomeProps) => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }));

    const [progress, setProgress] = React.useState(0);
    React.useEffect(() => {
        function tick() {
            // reset when reaching 100%
            setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(tick, 20);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress variant="determinate" value={progress} color="secondary" />
        </div>
    )

}

export default SpinnerComponent;