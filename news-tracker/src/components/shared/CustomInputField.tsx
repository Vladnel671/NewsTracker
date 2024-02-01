import React from 'react'
import { styled } from '@mui/material'
import styles from '../../styles/main.module.scss'
import { TextField } from '@material-ui/core'

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
      id='searchField'
      className={styles.searchInput}
      value={keyword}
      onChange={searchHandler}
      placeholder='Search...'
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
