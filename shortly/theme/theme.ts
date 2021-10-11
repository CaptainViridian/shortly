import {createTheme, ThemeOptions} from "@material-ui/core/styles";
import {PaletteOptions} from "@material-ui/core/styles/createPalette";

const grey = '#BFBFBF';

const commonPalette = {
    grayishViolet: '#9E9AA7',
    veryDarkBlue: '#35323E',
    veryDarkViolet: '#232127',
};

const primaryPalette = {
    main: '#29C7C7',
    dark: '#3B3054',
};

const palette: PaletteOptions = {
    primary: primaryPalette,
    secondary: {
        main: '#F46262',
    },
    grey: {
        '500': grey,
    },
    common: commonPalette,
    text: {
        primary: primaryPalette.dark,
        secondary: commonPalette.grayishViolet,
    }
}

const themeOptions: ThemeOptions = {
    palette,
    typography: {
        fontFamily: "Poppins",
        button: {
            textTransform: "none"
        }
    },
}

export default createTheme(themeOptions);
