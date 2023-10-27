import styles from './Form.module.scss'
import { InputLabels } from '@/utils/constants'
import {FormItem} from "@components/form-item";
import {Calculations} from "@utils/calculations.ts";
import {FC, useEffect, useState} from "react";
import {FormInputValue} from "@/app";
import {FormProps} from "@components/form/types.ts";
import {Title} from "@components/title";

export const Form:FC<FormProps> = ({totalDispatch, intensiveDispatch}) => {
    const [total, setTotal] = useState<FormInputValue>('');
    const [mediana, setMediana] = useState<FormInputValue>('');
    const [mediana_small, setMedianaSmall] = useState<FormInputValue>('');
    const [mediana_heavy, setMedianaHeavy] = useState<FormInputValue>('');
    const [mediana_presumable, setMedianaPresumable] = useState<FormInputValue>('');

    const calc = new Calculations({
        total: total,
        mediana: mediana,
        mediana_small: mediana_small,
        mediana_heavy: mediana_heavy,
        mediana_presumable: mediana_presumable
    });

    useEffect(() => {
        const {totalResult, intensiveResult} = calc.getResult();
        totalDispatch(totalResult);
        intensiveDispatch(intensiveResult)
    }, [total, mediana, mediana_small, mediana_heavy, mediana_presumable]);


  return (
    <div className={styles.form}>
        <Title title='Исходные данные'/>
        <FormItem description={InputLabels.TOTAL} value={total} dispatch={setTotal}/>
        <FormItem description={InputLabels.MEDIANA} value={mediana} dispatch={setMediana}/>
        <FormItem description={InputLabels.MEDIANA_SMALL} value={mediana_small} dispatch={setMedianaSmall}/>
        <FormItem description={InputLabels.MEDIANA_HEAVY} value={mediana_heavy} dispatch={setMedianaHeavy}/>
        <FormItem description={InputLabels.MEDIANA_PRESUMABLE} value={mediana_presumable} dispatch={setMedianaPresumable}/>
    </div>
  )
}
