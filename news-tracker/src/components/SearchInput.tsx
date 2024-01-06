import React, {ChangeEvent, useCallback, useState} from 'react'
import {IconButton, TextField} from "@material-ui/core"
import SearchIcon from "@mui/icons-material/Search"
import {styled} from '@mui/material'
import styles from '../styles/main.module.scss'
import {useNavigate} from "react-router-dom";
import {searchNews} from "../features/news/newsSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";

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
    const dispatch: AppDispatch = useDispatch();
    const [keyword, setKeyword] = useState<string>('')
    const navigate = useNavigate()

    const searchHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }, [])

    const getData = useCallback(async () => {
        if (keyword.trim() === '') {
            return;
        }
        dispatch(searchNews(keyword))
        navigate('/allnews')
        setKeyword("")
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
