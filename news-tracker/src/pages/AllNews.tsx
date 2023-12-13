import React, {useState} from 'react'
import styles from '../styles/main.module.scss'
import NewsItem from "../components/NewsItem.tsx"
import {useSelector} from "react-redux"
import Masonry from 'react-masonry-css'
import {INewsData} from "../types/types.ts"
import MainLoadingScreen from "../components/MainLoadingScreen.tsx"
import {breakpointColumnsObj, PER_PAGE} from "../constant"
import CustomPagination from "../components/CustomPagination.tsx"
import {scrollToTop} from "../utils/NewsUtils.ts"
import {RootState} from "../store/store.ts";

const AllNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news.news)

    const offset = currentPage * PER_PAGE

    const currentPageData = newsData
        .slice(offset, offset + PER_PAGE)
        .map((news: INewsData) => <NewsItemMemo isLoading={isLoading} news={news} key={news.title}/>)

    const pageCount = Math.ceil(newsData.length / PER_PAGE)

    function handlePageChange(_: unknown, value: number) {
        setCurrentPage(value - 1)
        scrollToTop()
    }

    if (isLoading) return <MainLoadingScreen/>

    return (
        <div className={styles.allNewsBlock}>

            {!newsData.length ? <></> : <CustomPagination
                count={pageCount}
                page={currentPage + 1}
                onChange={handlePageChange}
            />}
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}
            >
                {currentPageData}
            </Masonry>
            {!newsData.length ? <></> : <CustomPagination
                count={pageCount}
                page={currentPage + 1}
                onChange={handlePageChange}
            />}
        </div>
    );
};

export default AllNews;