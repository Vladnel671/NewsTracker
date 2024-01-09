import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import MainNews from "../components/MainNews.tsx"
import {motion} from "framer-motion"
import MultiCategoryNews from "../components/MultiCategoryNews/MultiCategoryNews.tsx"
import {AppDispatch, RootState} from "../store/store.ts";
import {fetchTopHeadlines} from "../features/news/newsSlice.ts";
import Spotlight from "../components/Spotlight.tsx";

const TopHeadlines: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const {data: news, isLoading} = useSelector((state: RootState) => state.news.topHeadlines)

    const firstColumnNews = news?.slice(0, 5)
    const secondColumnNews = news?.slice(5, 8)
    const thirdColumnNews = news?.slice(8, 12)

    const firstColumnMultiCategoryNews = news?.slice(12, 16)

    useEffect(() => {
        dispatch(fetchTopHeadlines())
    }, [dispatch])

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 3}}>
                <MainNews isLoading={isLoading}
                          firstColumnNews={firstColumnNews}
                          secondColumnNews={secondColumnNews}
                          thirdColumnNews={thirdColumnNews}/>
                <MultiCategoryNews isLoading={isLoading} news={firstColumnMultiCategoryNews}/>
                <Spotlight/>
            </motion.div>
        </>
    )
}

export default TopHeadlines
