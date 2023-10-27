import React, {useState} from 'react';
import styles from '../../../styles/main.module.scss';
import {RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";
import Masonry from 'react-masonry-css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const AllNews: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        830: 1
    };

    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news);

    if (!newsData.length || isLoading) return <div className={styles.spinnerBlock}>
        <Stack sx={{color: 'grey.500'}} spacing={2} direction="row">
            <CircularProgress color="secondary"/>
        </Stack>
    </div>

    const PER_PAGE = 10;
    const offset = currentPage * PER_PAGE;

    const currentPageData = newsData
        .slice(offset, offset + PER_PAGE)
        .map((news) => <NewsItemMemo news={news} key={news.title}/>);

    const pageCount = Math.ceil(newsData.length / PER_PAGE);

    function handlePageChange(_: unknown, value: number) {
        setCurrentPage(value - 1);
    }

    return (
        <div className={styles.allNewsBlock}>
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