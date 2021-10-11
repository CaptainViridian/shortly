import {makeStyles, Theme} from "@material-ui/core/styles";
import {ReactElement} from "react";

import ImageWorking from '../assets/illustration-working.svg';
import {Container, Typography, useMediaQuery} from "@material-ui/core";
import CTAButton from "./CTAButton";

const useStyles = makeStyles((theme) => ({
    hero: {
        display: "flex",
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3, 0, 3, 10),
            flexDirection: 'row',
            gap: theme.spacing(0),
        }
    },
    left: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            justifyContent: "space-between",
            alignItems: "baseline",
        }
    },
    text: {
        fontSize: '0.8rem',
    },
    leftTextContent: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            gap: theme.spacing(2),
            textAlign: 'center',
        }
    },
    title: {
        fontWeight: "bold",
        fontSize: '2rem',
        lineHeight: '2rem',
        [theme.breakpoints.up('sm')]: {
            lineHeight: '3.5rem',
            fontSize: '2.8rem'
        },
    },
    picture: {
        width: '120%',
        position: "relative",
        right: -theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            right: -theme.spacing(10),
            width: '60%',
        },
    }
}));

function Hero(): ReactElement {
    const classes = useStyles();
    const largeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Container className={classes.hero} maxWidth="lg">
            <div className={classes.left}>
                <div className={classes.leftTextContent}>
                    <Typography className={classes.title} color="textPrimary">
                        More than just shorter links
                    </Typography>
                    <Typography className={classes.text} color="textSecondary">
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </Typography>
                </div>
                <CTAButton text="Get Started"/>
            </div>
            <img src={ImageWorking.src} className={classes.picture}/>
        </Container>
    )
}

export default Hero;