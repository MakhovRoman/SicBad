import React from "react";
import {FormInputValue} from "@/app";

export type FormItemProps = {
    description: string,
    value: FormInputValue,
    dispatch:  React.Dispatch<React.SetStateAction<FormInputValue>>
}