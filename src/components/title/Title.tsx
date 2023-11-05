import {Divider, Typography} from "@mui/material";
import {FC} from "react";
import { TitleProps } from "./types";

export const Title:FC<TitleProps> = ({title, type, isDivider, fontSize}) => {
    return (
        <>
            <Typography
                variant={type}
                textAlign='center'
                gutterBottom
                color='white'
                sx={{
                    fontSize: {fontSize}
                }}
            >
                {title}
            </Typography>
            { isDivider &&
                <Divider
                    light={false}
                    sx={{
                        backgroundColor: "white",
                        marginBottom: '17px'
                    }}
                />
            }
        </>
    )
};
