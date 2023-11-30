import {FC} from "react";
import {ResultBlockProps} from "@components/result/types.ts";
import {Title} from "@components/title";
import styles from './Result.module.scss'
import { ResultText } from "@/utils/constants";

export const ResultBlock: FC<ResultBlockProps> = ({total, intensive}) => {
    const isShowResult = !isNaN(total) && !isNaN(intensive);

    return (
        <div className={styles.result}>
            <Title title='Результаты' type="h3" isDivider/>
            <p className={styles.result__description}>В ПОСЛЕДУЮЩИЕ 14 ДНЕЙ НЕОБХОДИМО РАЗВЕРНУТЬ</p>
            <div className={styles.result__block}>
                <div className={styles.result__data}>
                    <p>{ResultText.light}</p>
                    <p>{isShowResult ? total : 0}</p>
                </div>
                <div className={styles.result__data}>
                    <p>{ResultText.heavy}</p>
                    <p>{isShowResult ? intensive : 0}</p>
                </div>
            </div>
        </div>
    );
};
