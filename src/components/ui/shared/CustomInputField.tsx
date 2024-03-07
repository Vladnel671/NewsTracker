import { TextField } from '@material-ui/core'
import { styled } from '@mui/material'
import React from 'react'

import styles from '../../../styles/main.module.scss'

interface CustomInputFieldPropsProps {
  keyword: string
  searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomTextField = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'gray',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'dimgray',
  },
})

const CustomInputField: React.FC<CustomInputFieldPropsProps> = ({
  searchHandler,
  keyword,
}) => {
  return (
    <CustomTextField
      id="search-field"
      className={styles['search-input']}
      value={keyword}
      onChange={searchHandler}
      placeholder="Search..."
      InputProps={{
        style: {
          color: 'white',
        },
        autoComplete: 'off',
      }}
    />
  )
}

export default CustomInputField
