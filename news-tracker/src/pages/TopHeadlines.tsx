import React, {useEffect} from 'react'
import {useGetData} from "../hooks/useGetData.ts"
import {useSelector} from "react-redux"
import {RootState} from "../types/types.ts"
import MainNewsBlock from "../pages/MainNewsBlock.tsx"
import {motion} from "framer-motion"

const TopHeadlines: React.FC = () => {
    const getData = useGetData();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines)

    const firstColumnNews = news.slice(0, 5);
    const secondColumnNews = news.slice(5, 8);
    const thirdColumnNews = news.slice(8, 12);

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
                <MainNewsBlock isLoading={isLoading}
                               firstColumnNews={firstColumnNews}
                               secondColumnNews={secondColumnNews}
                               thirdColumnNews={thirdColumnNews}/>
            </motion.div>
        </>
    );
};

export default TopHeadlines
