import { Form } from '@components/form'
import styles from './App.module.scss'
import {useState} from "react";
import {ResultBlock} from "@components/result";

export const App = () => {
    const [totalResult, setTotalResult] = useState(0);
    const [intensiveResult, setIntensiveResult] = useState(0)

  return (
    <main className={styles.app}>
      <Form totalDispatch={setTotalResult} intensiveDispatch={setIntensiveResult}/>
        <ResultBlock total={totalResult} intensive={intensiveResult} />
    </main>
  )
}
