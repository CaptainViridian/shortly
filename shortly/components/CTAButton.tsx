import {ReactElement} from "react";
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.common.white,
        borderRadius: theme.spacing(3),
        width: ({fullWidth}: { fullWidth?: boolean }) => fullWidth ? '100%' : 'auto',
    }
}));

function CTAButton(props: { text: string, fullWidth?: boolean }): ReactElement {
    const classes = useStyles(props);
    return (
        <Button className={classes.button} color="primary" variant="contained">
            <Typography variant="inherit" color="inherit">{props.text}</Typography>
        </Button>
    );
}

export default CTAButton;