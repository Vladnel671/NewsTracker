import React, {useState} from 'react'
import styles from '../styles/main.module.scss'
import AllNewsItem from "../components/AllNewsItem.tsx"
import Masonry from 'react-masonry-css'
import {INewsData} from "../types/types.ts"
import Loader from "../components/Loader.tsx"
import {breakpointColumnsObj, PER_PAGE} from "../constant"
import Paginator from "../components/Paginator.tsx"
import {scrollToTop} from "../utils/NewsUtils.ts"
import {ALL_NEWS_URL, useFetchNewsDataQuery} from "../api/API.ts";
import Alert from "@mui/material/Alert";

const AllNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const NewsItemMemo = React.memo(AllNewsItem);
    const {data: newsData, isLoading, error } = useFetchNewsDataQuery(ALL_NEWS_URL);

    if (isLoading) return <Loader/>
    if (!newsData) return <Alert variant="filled" severity="info">Missing news!</Alert>
    if (error) {
        const errorMessage =
            'message' in error ? error.message : JSON.stringify(error);
        return <Alert variant="filled" severity="error">{errorMessage}</Alert>;
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = newsData
        .slice(offset, offset + PER_PAGE)
        .map((news: INewsData) => <NewsItemMemo isLoading={isLoading} news={news} key={news.title}/>);

    const pageCount = Math.ceil(newsData.length / PER_PAGE);

    function handlePageChange(_: unknown, value: number) {
        setCurrentPage(value - 1);
        scrollToTop();
    }

    return (
        <section className={styles.allNewsBlock}>
            {!newsData.length ? <></> :
                <Paginator count={pageCount} page={currentPage + 1} onChange={handlePageChange}/>}
            <Masonry breakpointCols={breakpointColumnsObj} className={styles.masonryGrid}
                     columnClassName={styles.masonryGridColumn}>
                {currentPageData}
            </Masonry>
            {!newsData.length ? <></> :
                <Paginator count={pageCount} page={currentPage + 1} onChange={handlePageChange}/>}
        </section>
    );
};

export default AllNews;