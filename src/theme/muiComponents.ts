import {createTheme} from "@mui/material";

export const theme = createTheme({
    components: {
        MuiFilledInput: {
            styleOverrides: {
                input: {
                    paddingTop: 8
                }
            }
        }
    }
})