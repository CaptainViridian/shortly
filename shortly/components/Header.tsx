import React, {ReactElement, useState} from "react";

import {makeStyles} from '@material-ui/core/styles'
import {Button, Container, Divider, IconButton, MenuItem, Paper, Toolbar, Typography} from "@material-ui/core";
import { Menu as MenuIcon } from '@material-ui/icons'

import CTAButton from "./CTAButton";

import ShortlyLogo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(4, 0),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 8),
        }
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(1)
    },
    title: {
        fontWeight: 'bold',
        marginRight: theme.spacing(1)
    },
    defaultButtonText: {
        fontSize: '1rem',
        fontWeight: 'bold',
    },
    toolbar: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'inherit',
            padding: 0,
            gap: theme.spacing(1)
        }
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    menuRoot: {
        position: 'fixed',
        width: `calc(100% - ${theme.spacing(6)}px)`,
        left: theme.spacing(3),
        color: theme.palette.common.white,
        padding: theme.spacing(3, 2, 5, 2),
        backgroundColor: theme.palette.primary.dark,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: theme.spacing(1.5),
        zIndex: 99,
    },
    divider: {
        width: '100%',
        backgroundColor: theme.palette.grey[500],
        margin: theme.spacing(1,0),
        opacity: '.1',
    }
}));

function HeaderDefaultButton({text}: { text: string }): ReactElement {
    const classes = useStyles();
    return (
        <Button>
            <Typography className={classes.defaultButtonText} color="textSecondary">{text}</Typography>
        </Button>
    );
}

interface NavigationOption {
    name: string;
    showCTAButton: boolean;
}

function HeaderMenu({open, handleClose, navigationOptions, loginOptions}: {
    open: boolean,
    handleClose: () => void,
    navigationOptions: Array<NavigationOption>,
    loginOptions: Array<NavigationOption>,
}): ReactElement {
    const classes = useStyles({open});

    return open ? (
        <Paper className={classes.menuRoot}>
            {navigationOptions.map(({name}) => <MenuItem key={name}>{name}</MenuItem>)}
            <Divider className={classes.divider} />
            {loginOptions.map(({name, showCTAButton}) => showCTAButton ? (
                <CTAButton fullWidth key={name} text={name}  />
            ) : (
                <MenuItem onClick={handleClose} key={name}>{name}</MenuItem>
            ))}
        </Paper>
    ) : <></>
}

function Header(): ReactElement {
    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickMenuButton = () => setMenuOpen(!menuOpen);
    const handleCloseMenu = () => setMenuOpen(false);

    const navigationOptions: Array<NavigationOption> =
        ['Features', 'Pricing', 'Resources'].map(option => ({name: option, showCTAButton: false}));
    const loginOptions: Array<NavigationOption> = [
        {name: 'Login', showCTAButton: false},
        {name: 'Sign Up', showCTAButton: true}
    ];

    return (
        <>
            <Container>
                <header className={classes.header}>
                    <div className={classes.left}>
                        <img src={ShortlyLogo.src}/>
                        <Toolbar className={classes.toolbar}>
                            {navigationOptions.map(({name}) => (
                                <HeaderDefaultButton key={name} text={name}/>))
                            }
                        </Toolbar>
                    </div>

                    <Toolbar className={classes.toolbar}>
                        {loginOptions.map(({name, showCTAButton}) => showCTAButton ? (
                            <CTAButton key={name} text={name}/>
                        ) : (
                            <HeaderDefaultButton key={name} text={name}/>
                        ))}
                    </Toolbar>

                    <IconButton
                        className={classes.menuButton}
                        onClick={handleClickMenuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </header>
            </Container>
            <HeaderMenu open={menuOpen} handleClose={handleCloseMenu} loginOptions={loginOptions}
                        navigationOptions={navigationOptions}/>
        </>
    );
}

export default Header;