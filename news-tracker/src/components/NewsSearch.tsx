import { IconButton, TextField } from "@material-ui/core"
import SearchIcon from "@mui/icons-material/Search"
import { styled } from "@mui/material"
import React, { ChangeEvent, useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/main.module.scss"

const CustomTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "gray",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "dimgray",
  },
})

const NewsSearch: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("")
  const navigate = useNavigate()

  const searchHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }, [])

  const getData = () => {
    if (keyword.trim() === "") {
      return
    }
    navigate("/allnews")
    setKeyword("")
  }

  return (
    <div className={styles.searchInputBlock}>
      <IconButton onClick={getData} aria-label="search">
        <SearchIcon style={{ color: "white" }} />
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
          autoComplete: "off",
        }}
      />
    </div>
  )
}

export default NewsSearch
