import {TextField} from "@mui/material";
import styles from './FormItem.module.scss';
import {ChangeEvent, FC} from "react";
import {FormItemProps} from "@components/form-item/types.ts";

export const FormItem:FC<FormItemProps> = ({description, value, dispatch, note}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);

        if (isNaN(value)) return;

        dispatch(Number(value))
    }

    return (
        <div className={styles.formItem}>
            <TextField
                type='text'
                variant='filled'
                inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}}
                value={value}
                onChange={handleChange}
                sx={{
                    width: 150,
                    bgcolor: "white",
                    padding: 0
                }}
            />
            <div className={styles.formItem__description}>
                <p>{description}</p>
                <p className={styles.formItem__note}>{note}</p>
            </div>
        </div>
    );
};
