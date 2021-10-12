import React, {ReactElement} from "react";
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import FacebookIcon from '../assets/icon-facebook.svg';
import TwitterIcon from '../assets/icon-twitter.svg';
import PinterestIcon from '../assets/icon-pinterest.svg';
import InstagramIcon from '../assets/icon-instagram.svg';

const useStyles = makeStyles((theme) => ({
    footer: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.veryDarkBlue,
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            padding: theme.spacing(4, 10),
            alignItems: 'flex-start',
        },
    },
    title: {
        fontWeight: 'bold',
    },
    links: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            gap: theme.spacing(5),
            flexDirection: 'row',
            alignItems: 'flex-start',
        }
    },
    category: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
        margin: theme.spacing(2, 0),
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0),
        },
    },
    linkList: {
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-start',
        },
    },
    linkListTitle: {
        fontSize: '0.5rem',
        fontWeight: "bold",
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'auto',
        },
    },
    link: {
        fontSize: '0.5rem',
    },
    socialLinks: {
        padding: theme.spacing(0, 3),
        display: 'flex',
        gap: theme.spacing(1.5),
    },
    socialIcon: {
        width: theme.spacing(1.5),
    },
}));

interface FooterItem {
    name: string;
    href: string;
}

function Category({title, items}: { title: string, items: Array<FooterItem> }): ReactElement {
    const classes = useStyles();
    return (
        <div className={classes.category}>
            <Typography className={classes.linkListTitle}>{title}</Typography>
            <ul className={classes.linkList}>
                {items.map(({name, href}) => (
                    <a href={href} key={name}>
                        <Typography className={classes.link} color="textSecondary">{name}</Typography>
                    </a>
                ))}
            </ul>
        </div>
    );
}

function SocialLink({iconSrc}: { iconSrc: string }): ReactElement {
    const classes = useStyles();
    return (
        <a href="#">
            <img className={classes.socialIcon} src={iconSrc}/>
        </a>
    );
}

const socialIcons = [FacebookIcon, TwitterIcon, PinterestIcon, InstagramIcon];

const createFooterItem = (name: string): FooterItem => ({name, href: '#'});

function Footer(): ReactElement {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container className={classes.container}>
                <Typography className={classes.title} variant="h6" color="inherit">Shortly</Typography>
                <div className={classes.links}>
                    <Category title="Features"
                              items={['Link Shortening', 'Branded Links', 'Analytics'].map(createFooterItem)}/>
                    <Category title="Resources" items={['Blog', 'Developers', 'Support'].map(createFooterItem)}/>
                    <Category title="Company"
                              items={['About', 'Our Team', 'Careers', 'Contact'].map(createFooterItem)}/>
                    <div className={classes.socialLinks}>
                        {socialIcons.map(icon => <SocialLink iconSrc={icon.src}/>)}
                    </div>
                </div>

            </Container>
        </footer>
    );
}

export default Footer;