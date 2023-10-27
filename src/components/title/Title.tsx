import {Divider, Typography} from "@mui/material";
import {FC} from "react";
import { TitleProps } from "./types";

export const Title:FC<TitleProps> = ({title}) => {
    return (
        <>
            <Typography
                variant="h3"
                textAlign='center'
                gutterBottom
                color='white'
            >
                {title}
            </Typography>
            <Divider
                light={false}
                sx={{
                    backgroundColor: "white",
                    marginBottom: '17px'
                }}
            />
        </>
    )
};
