import React, {useState} from 'react';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from '../styles/main.module.scss'
import {fetchNewsData} from "../utils/NewsUtils.ts";
import {setLoadingNews, setNews} from "../store/actions.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {ALL_NEWS_URL, API_KEY} from "../constant";

const BurgerMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchNewsByCategory = async (category: string) => {
        const URL = `${ALL_NEWS_URL}${API_KEY}&q=${category}`
        try {
            dispatch(setLoadingNews(true))
            const filteredNews = await fetchNewsData(URL)
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false))
            navigate('/allnews');
        } catch (error) {
            console.log(error);
            dispatch(setLoadingNews(false))
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (category: string) => {
        handleClose()
        fetchNewsByCategory(category)
    };
    return (
        <div>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={styles.MenuItems}
            >
                <MenuItem onClick={() => handleMenuItemClick('U.S.')}>U.S.</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('Politics')}>Politics</MenuItem>
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
    );
};

export default BurgerMenu;