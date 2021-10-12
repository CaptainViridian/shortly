import {makeStyles} from "@material-ui/core/styles";
import {ReactElement} from "react";

import {Container, Typography} from "@material-ui/core";

import ActionButton from "./ActionButton";

import ImageBoostSmall from '../assets/bg-boost-mobile.svg';
import ImageBoostLarge from '../assets/bg-boost-desktop.svg';

const useStyles = makeStyles((theme) => ({
    callToAction: {
        backgroundPosition: 'center',
        backgroundColor: theme.palette.primary.dark,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundImage: `url(${ImageBoostSmall.src})`,
        [theme.breakpoints.up('sm')]: {
            backgroundImage: `url(${ImageBoostLarge.src})`,
        },
    },
    container: {
        display: 'flex',
        flexDirection: "column",
        gap: theme.spacing(1),
        alignItems: "center",
        padding: theme.spacing(5, 0),
    },
    text: {
        color: theme.palette.common.white,
    },
}));

function CallToAction(): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.callToAction}>
            <Container className={classes.container}>
                <Typography className={classes.text}>Boost your links today</Typography>
                <ActionButton text="Get Started"/>
            </Container>

        </div>
    );
}

export default CallToAction;
