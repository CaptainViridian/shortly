import {ReactElement} from "react";
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    text: string;
    fullWidth?: boolean;
    borderRadius?: number;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    color?: string;
}

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.common.white,
        borderRadius: ({borderRadius}: Props) => theme.spacing(borderRadius || 3),
        width: ({fullWidth}: Props) => fullWidth ? '100%' : 'auto',
        backgroundColor: ({color}: Props) => color ? color : '',
    }
}));

function ActionButton(props: Props): ReactElement {
    const classes = useStyles(props);
    return (
        <Button
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={props.onClick}
            type={props.type}
        >
            <Typography variant="inherit" color="inherit">{props.text}</Typography>
        </Button>
    );
}

export default ActionButton;