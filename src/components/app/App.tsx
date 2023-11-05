import { Form } from '@components/form'
import styles from './App.module.scss'
import {useState} from "react";
import {ResultBlock} from "@components/result";
import { Title } from '../title';
import { TitleLabels } from '@/utils/constants';
import { Box } from '@mui/material';

export const App = () => {
    const [totalResult, setTotalResult] = useState(0);
    const [intensiveResult, setIntensiveResult] = useState(0)

  return (
    <main className={styles.app}>
      <Box marginTop={5} className={styles.app__title}>
        <Title title={TitleLabels.MAIN} type='h1' fontSize={40}/>
      </Box>
      <Box marginTop={10} className={styles.app__title}>
        <Title title={TitleLabels.SUBMAIN} type='h3' fontSize={24}/>
      </Box>
      <Form totalDispatch={setTotalResult} intensiveDispatch={setIntensiveResult}/>
      <ResultBlock total={totalResult} intensive={intensiveResult} />
    </main>
  )
}
