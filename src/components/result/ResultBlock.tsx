import {FC} from "react";
import {ResultBlockProps} from "@components/result/types.ts";
import {Title} from "@components/title";
import styles from './Result.module.scss'

export const ResultBlock: FC<ResultBlockProps> = ({total, intensive}) => {
    const isShowResult = !isNaN(total) && !isNaN(intensive);

    return (
        <div className={styles.result}>
            <Title title='Результаты'/>
            <p className={styles.result__description}>Расчет оптимального числа койко-мест на предстоящие 14 дней</p>
            <p className={styles.result__data}>
                <span>Чк<sub>общ</sub></span>
                <span>{isShowResult ? total : 0}</span>
            </p>
            <p className={styles.result__data}>
                <span>Чк<sub>ОРИТ</sub></span>
                <span>{isShowResult ? intensive : 0}</span>
            </p>
        </div>
    );
};
