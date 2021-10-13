import {makeStyles} from "@material-ui/core/styles";
import {Link} from "../model/Link";
import {Container, Divider, Paper, useTheme} from "@material-ui/core";
import ActionButton from "./ActionButton";
import {ReactElement, useState} from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.grey[200],
        paddingBottom: theme.spacing(1),
        fontFamily: 'Poppins',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0, 10),
        },
    },
    linkCard: {
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.common.white,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme.spacing(2, 3),
        },
    },
    originalLink: {
        color: theme.palette.primary.dark,
    },
    shortenedLink: {
        color: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },

    },
    divider: {
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

async function copyLink(link: string, callBack: () => void) {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(link);
        callBack();
    }
}

function LinkCard({link: {originalLink, shortenedLink}, onClick, copied}: {
    link: Link,
    copied: boolean,
    onClick: () => void
}): ReactElement {
    const classes = useStyles();
    const theme = useTheme();

    const clipboardAvailable = Boolean(navigator?.clipboard);

    const buttonText = copied ? 'Copied!' : 'Copy';

    const handleCopyButtonClick = function () {
        copyLink(shortenedLink, onClick);
    }

    return (
        <div className={classes.linkCard}>
            <div className={classes.originalLink}>{originalLink}</div>
            <Divider className={classes.divider}/>
            <div className={classes.shortenedLink}>
                {shortenedLink}
                {clipboardAvailable ? (
                    <ActionButton
                        text={buttonText}
                        fullWidth
                        borderRadius={1}
                        onClick={handleCopyButtonClick}
                        color={copied ? theme.palette.primary.dark : undefined}
                    />
                ) : null}
            </div>
        </div>
    );
}

function StoredLinks({links}: { links: Array<Link> }) {
    const classes = useStyles();
    const [lastClicked, setLastClicked] = useState<number | null>(null);

    return (
        <Container className={classes.container}>
            {links.map((link, index) => (
                <LinkCard
                    link={link}
                    copied={lastClicked === index}
                    onClick={() => setLastClicked(index)}
                />
            ))}
        </Container>
    );
}

export default StoredLinks;