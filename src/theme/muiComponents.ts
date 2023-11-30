import {createTheme} from "@mui/material";

export const theme = createTheme({
    components: {
        MuiFilledInput: {
            styleOverrides: {
                input: {
                    paddingTop: 8
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    marginBottom: 30
                }
            }
        }
    }
})
