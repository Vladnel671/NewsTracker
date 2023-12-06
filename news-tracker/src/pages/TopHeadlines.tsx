import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import {RootState} from "../types/types.ts"
import MainNews from "../components/MainNews.tsx"
import {motion} from "framer-motion"
import {fetchTopHeadlinesData} from "../utils/NewsUtils.ts";
import MultiCategoryNews from "../components/MultiCategoryNews.tsx";

const TopHeadlines: React.FC = () => {
    const getData = fetchTopHeadlinesData();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines)

    const firstColumnNews = news.slice(0, 5);
    const secondColumnNews = news.slice(5, 8);
    const thirdColumnNews = news.slice(8, 12);

    const firstColumnMultiCategoryNews = news.slice(12, 16)

    useEffect(() => {
        if (!news.length) {
            getData()
        }
    }, [getData, news.length])

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 3}}>
                <MainNews isLoading={isLoading}
                          firstColumnNews={firstColumnNews}
                          secondColumnNews={secondColumnNews}
                          thirdColumnNews={thirdColumnNews}/>
                <MultiCategoryNews isLoading={isLoading} firstColumnMultiCategoryNews={firstColumnMultiCategoryNews}/>
            </motion.div>
        </>
    );
};

export default TopHeadlines
