import React, {useState} from 'react'
import {IconButton, Menu} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import styles from '../../src/styles/main.module.scss'
import {fetchNewsByCategory} from "../features/news/newsSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";
import {MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";

const BurgerMenu: React.FC = () => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleMenuItemClick = (category: string) => {
        handleClose()
        dispatch(fetchNewsByCategory(category))
        navigate('/allnews');
    }

    return (
        <div className={styles.BurgerMenuBlock}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{zIndex: '10001'}}
            >
                <MenuItem onClick={() => handleMenuItemClick('U.S.')}>U.S.</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('International')}>International</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Entertainment')}>Entertainment</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Business')}>Business</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Technology')}>Technology</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Lifestyle')}>Lifestyle</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Health')}>Health</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Virtual Reality')}>Virtual Reality</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Weather')}>Weather</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Sports')}>Sports</MenuItem>
            </Menu>
        </div>
    )
}

export default BurgerMenu