import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import MainNews from "../components/MainNews/MainNews.tsx"
import {motion} from "framer-motion"
import MultiCategoryNews from "../components/MultiCategoryNews/MultiCategoryNews.tsx"
import {AppDispatch} from "../store/store.ts";
import {fetchTopHeadlines} from "../features/news/newsSlice.ts";
import Spotlight from "../components/Spotlight/Spotlight.tsx";
import {scrollToTop} from "../utils/NewsUtils.ts";
import InCaseYouMissedIt from "../components/InCaseYouMissedIt/InCaseYouMissedIt.tsx";
import {TOP_HEADLINES, useFetchNewsDataQuery} from "../api/API.ts";
import TopHeadlinesSkeleton from "../components/MainNews/TopHeadlinesSkeleton.tsx";
import Alert from '@mui/material/Alert';

const TopHeadlines: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const {data: news, isLoading, error} = useFetchNewsDataQuery(TOP_HEADLINES);
    scrollToTop()

    const firstColumnNews = news?.slice(0, 5) || []
    const secondColumnNews = news?.slice(5, 8) || []
    const thirdColumnNews = news?.slice(8, 12) || []

    const firstColumnMultiCategoryNews = news?.slice(12, 30) || []

    useEffect(() => {
        dispatch(fetchTopHeadlines())
    }, [dispatch])

    if (isLoading) return <TopHeadlinesSkeleton/>
    if (news) return <Alert variant="filled" severity="info">Missing news!</Alert>
    if (error) {
        const errorMessage =
            'message' in error ? error.message : JSON.stringify(error);
        return <Alert variant="filled" severity="error">{errorMessage}</Alert>;
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 3}}>
            <MainNews isLoading={isLoading}
                      firstColumnNews={firstColumnNews}
                      secondColumnNews={secondColumnNews}
                      thirdColumnNews={thirdColumnNews}/>
            <MultiCategoryNews isLoading={isLoading} news={firstColumnMultiCategoryNews}/>
            <InCaseYouMissedIt/>
            <Spotlight/>
        </motion.div>
    )
}

export default TopHeadlines
