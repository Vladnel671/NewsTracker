import React, {useCallback} from 'react';
import styles from "../../../App.module.css";
import {INewsData, RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Masonry from 'react-masonry-css';

const AllNews: React.FC = () => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };

    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news);
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1);
    };

    const renderNews = useCallback(() => {
        if (isLoading) {
            return <span className={styles.spinner}></span>;
        } else if (newsData) {
            return newsData.length === 0 ? <span>No news found</span> : newsData.map((news: INewsData) => <NewsItemMemo
                news={news} key={news.title}/>);
        }
        return null;
    }, [isLoading, newsData]);

    return (
        <div className={styles.allNewsBlock}>
            <IconButton color={"primary"} onClick={goBackHandler}>
                <ArrowBackIcon/>Back to Top and breaking headlines
            </IconButton>
            <div className={styles.News}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.masonryGrid}
                    columnClassName={styles.masonryGridColumn}
                >
                {renderNews()}
                </Masonry>
            </div>
        </div>
    );
};

export default AllNews;