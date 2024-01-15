import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import MainNews from "../components/MainNews.tsx"
import {motion} from "framer-motion"
import MultiCategoryNews from "../components/MultiCategoryNews/MultiCategoryNews.tsx"
import {AppDispatch} from "../store/store.ts";
import {fetchTopHeadlines} from "../features/news/newsSlice.ts";
import Spotlight from "../components/Spotlight.tsx";
import {scrollToTop} from "../utils/NewsUtils.ts";
import InCaseYouMissedIt from "../components/InCaseYouMissedIt.tsx";
import {TOP_HEADLINES, useFetchNewsDataQuery} from "../api/API.ts";
import TopHeadlinesSkeleton from "../components/TopHeadlinesSkeleton.tsx";

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
    if (!news) return <div>Missing news!</div>
    if (error) return <div>Error!</div>

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 3}}>
            <MainNews isLoading={isLoading}
                      firstColumnNews={firstColumnNews}
                      secondColumnNews={secondColumnNews}
                      thirdColumnNews={thirdColumnNews}/>
            <MultiCategoryNews isLoading={isLoading} news={firstColumnMultiCategoryNews}/>
            <Spotlight/>
            <InCaseYouMissedIt/>
        </motion.div>
    )
}

export default TopHeadlines
