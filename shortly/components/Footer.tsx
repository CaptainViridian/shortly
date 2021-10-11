import {makeStyles} from "@material-ui/core/styles";
import React, {ReactElement} from "react";
import {Button, Container, Typography} from "@material-ui/core";
import {flexbox} from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
    footer: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.common.veryDarkBlue,
        padding: theme.spacing(4, 10),
    },
    container: {
        padding: 0,
        display: "flex",
        justifyContent: "space-between"
    },
    title: {
        fontWeight: 'bold',
    },
    links: {
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(5)
    },
    category: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.5),
    },
    linkList: {
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(0.5),
    },
    linkListTitle: {
        fontSize: '0.5rem',
        fontWeight: "bold"
    },
    link: {
        fontSize: '0.5rem',
    }
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
                        <Typography className={classes.link} color="textSecondary" >{name}</Typography>
                    </a>
                ))}
            </ul>
        </div>
    );
}

const createFooterItem = (name: string): FooterItem => ({ name, href: '#'})

function Footer(): ReactElement {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container className={classes.container}>
                <Typography className={classes.title} variant="h6" color="inherit">Shortly</Typography>
                <div className={classes.links}>
                    <Category title="Features" items={['Link Shortening', 'Branded Links', 'Analytics'].map(createFooterItem)}/>
                    <Category title="Resources" items={['Blog', 'Developers', 'Support'].map(createFooterItem)}/>
                    <Category title="Company" items={['About', 'Our Team', 'Careers', 'Contact'].map(createFooterItem)}/>
                </div>
                <div>

                </div>
            </Container>
        </footer>
    );
}



export default Footer;