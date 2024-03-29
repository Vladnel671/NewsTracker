import { IconButton } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search'
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CustomInputField from './shared/CustomInputField'
import styles from '../../styles/main.module.scss'

const NewsSearch: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('')
  const navigate = useNavigate()

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getData()
    }
  }

  const getData = () => {
    if (keyword.trim() === '') {
      return
    }
    navigate('/allnews')
    setKeyword('')
  }

  return (
    <div className={styles['search-input-block']}>
      <IconButton onClick={getData} aria-label="search">
        <SearchIcon style={{ color: 'white' }} />
      </IconButton>
      <CustomInputField
        onKeyPress={handleKeyPress}
        keyword={keyword}
        searchHandler={searchHandler}
      />
    </div>
  )
}

export default NewsSearch
