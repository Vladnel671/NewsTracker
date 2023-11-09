import React, {ChangeEvent, useCallback, useState} from 'react'
import {IconButton, TextField} from "@material-ui/core"
import {useNavigate} from "react-router-dom"
import {fetchNewsData} from "../utils/NewsUtils.ts"
import {setLoadingNews, setNews} from "../store/actions.ts"
import {useDispatch} from "react-redux"
import {ALL_NEWS_URL, API_KEY} from "../constant"
import SearchIcon from "@mui/icons-material/Search"
import {styled} from '@mui/material'
import styles from '../styles/main.module.scss'

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

const SearchInput: React.FC = () => {

    const [keyword, setKeyword] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const searchHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }, [])

    const getData = useCallback(async () => {
        if (keyword.trim() === '') {
            navigate('/allnews')
        }

        navigate('/allnews')
        const URL = `${ALL_NEWS_URL}${API_KEY}&q=${keyword}`
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await fetchNewsData(URL)
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false))
            setKeyword("")
        } catch (error) {
            console.log(error)
            dispatch(setLoadingNews(false))
        }
    }, [keyword, dispatch])

    return (
        <div className={styles.searchInputBlock}>
            <IconButton onClick={getData} aria-label="search">
                <SearchIcon style={{color: 'white'}}/>
            </IconButton>
            <CustomTextField
                id="searchField"
                className={styles.searchInput}
                value={keyword}
                onChange={searchHandler}
                placeholder="Search..."
                InputProps={{
                    style: {
                        color: "white",
                    },
                    autoComplete: 'off'
                }}
            />
        </div>
    );
};

export default SearchInput
