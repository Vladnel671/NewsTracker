import React, {useState} from 'react';
import styles from '../styles/main.module.scss';
import NewsItem from "../components/NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";
import Masonry from 'react-masonry-css';
import Pagination from '@mui/material/Pagination';
import {INewsData, RootState} from "../types/types.ts";
import MainLoadingScreen from "../components/MainLoadingScreen.tsx";

const AllNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        830: 1
    };

    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news);

    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE

    const currentPageData = newsData
        .slice(offset, offset + PER_PAGE)
        .map((news: INewsData) => <NewsItemMemo news={news} key={news.title}/>);

    const pageCount = Math.ceil(newsData.length / PER_PAGE);

    function handlePageChange(_: unknown, value: number) {
        setCurrentPage(value - 1)
        window.scrollTo(0, 0);
    }

    if (!newsData.length || isLoading) return <MainLoadingScreen/>

    return (
        <div className={styles.allNewsBlock}>
            <span style={{color: "wheat"}}>Search results for:</span>
            <Pagination
                count={pageCount}
                page={currentPage + 1}
                onChange={handlePageChange}
                color="secondary"
                size="large"
                className={styles.pagination}
            />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}
            >
                {currentPageData}
            </Masonry>
            <Pagination
                count={pageCount}
                page={currentPage + 1}
                onChange={handlePageChange}
                color="secondary"
                size="large"
                className={styles.pagination}
            />
        </div>
    );
};

export default AllNews;