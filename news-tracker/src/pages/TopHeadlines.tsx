import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import MainNews from "../components/MainNews.tsx"
import {motion} from "framer-motion"
import MultiCategoryNews from "../components/MultiCategoryNews/MultiCategoryNews.tsx"
import {useFetchTopHeadlinesData} from "../hooks/useFetchTopHeadlinesData.ts"
import {RootState} from "../store/store.ts";

const TopHeadlines: React.FC = () => {

    const {data: news, isLoading} = useSelector((state: RootState) => state.news.topHeadlines)

    const firstColumnNews = news?.slice(0, 5)
    const secondColumnNews = news?.slice(5, 8)
    const thirdColumnNews = news?.slice(8, 12)

    const firstColumnMultiCategoryNews = news?.slice(12, 16)

    const fetchData = useFetchTopHeadlinesData()
    useEffect(() => {
        fetchData()
    }, [fetchData])

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
            </motion.div>
        </>
    )
}

export default TopHeadlines
