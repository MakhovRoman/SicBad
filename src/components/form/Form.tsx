import { TextField } from '@mui/material'
import React from 'react'
import styles from './Form.module.scss'
import { InputLabels } from '@/utils/constants'

export const Form = () => {
  return (
    <div className={styles.form}>
      <div>
        <TextField
          type='text'
          variant='filled'
        />
        <p>{InputLabels.TOTAL}</p>
      </div>
    </div>
  )
}
