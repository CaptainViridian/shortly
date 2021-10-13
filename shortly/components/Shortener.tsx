import {makeStyles} from "@material-ui/core/styles";
import {Container, Typography} from "@material-ui/core";

import ImageFormSmall from '../assets/bg-shorten-mobile.svg';
import ImageFormLarge from '../assets/bg-shorten-desktop.svg';
import ActionButton from "./ActionButton";
import {ChangeEvent, FormEvent, useState} from "react";
import {shortenLink} from "../thunks";
import {Link} from "../model/Link";

const useStyles = makeStyles((theme) => ({
    shortener: {
        background: `linear-gradient(180deg, ${theme.palette.common.white} 50%, ${theme.palette.grey[200]} 50%)`,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 10),
        }
    },
    form: {
        backgroundPosition: 'center',
        backgroundColor: theme.palette.primary.dark,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundImage: `url(${ImageFormSmall.src})`,

        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),

        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1.5),
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            padding: theme.spacing(3, 4),
            alignItems: 'center',
            backgroundImage: `url(${ImageFormLarge.src})`,
        }
    },
    formInput: {
        flexDirection: 'column',
        gap: theme.spacing(0.5),
        width: '100%',
    },
    input: {
        width: '100%',
        borderRadius: theme.spacing(0.8),
        padding: theme.spacing(1, 1.5),
        fontFamily: 'Poppins',

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1.5, 2)
        }
    },
    errorMessage: {
        fontStyle: 'italic',
        color: theme.palette.secondary.main,
    },
    submit: {
        [theme.breakpoints.up('sm')]: {
            width: '30%',
            height: '100%',
        }
    }
}));

function FormInput({inputValue, handleChange, error}: {
    inputValue: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    error: boolean
}) {
    const classes = useStyles();

    return (
        <div className={classes.formInput}>
            <input
                className={classes.input} value={inputValue}
                onChange={handleChange}
                placeholder="Shorten a link here..."
            />
            {error ?
                <Typography variant="caption" className={classes.errorMessage}>Please add a link</Typography> : <></>}
        </div>
    )
}

function ShortenerForm({onSubmit}: { onSubmit: (link: Link) => void }) {
    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setInputValue(event.currentTarget.value);
    }

    const handleSubmit = async function (event: FormEvent) {
        event.preventDefault();
        if (inputValue === '') {
            setError(true);
            return;
        }

        const newLink = await shortenLink(inputValue);
        onSubmit(newLink);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <FormInput inputValue={inputValue} handleChange={handleChange} error={error}/>
            <div className={classes.submit}>
                <ActionButton text="Shorten It!" fullWidth borderRadius={1} type="submit"/>
            </div>
        </form>
    )
}

function Shortener({addNewLink}: { addNewLink: (link: Link) => void }) {
    const classes = useStyles();
    return (
        <Container className={classes.shortener}>
            <ShortenerForm onSubmit={addNewLink}/>
        </Container>
    )
}

export default Shortener;