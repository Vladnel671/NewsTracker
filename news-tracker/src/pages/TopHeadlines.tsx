import React, {useEffect} from 'react'
import MainLoadingScreen from "../components/MainLoadingScreen.tsx"
import {useGetData} from "../hooks/useGetData.ts"
import {useSelector} from "react-redux"
import {RootState} from "../types/types.ts"
import MainNewsBlock from "../pages/MainNewsBlock.tsx"
import {motion} from "framer-motion"

const TopHeadlines: React.FC = () => {
    const getData = useGetData();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines)

    useEffect(() => {
        if (!news.length) {
            getData()
        }
    }, [getData, news.length])

    if (!news.length || isLoading) return <MainLoadingScreen/>

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 3}}>
                <MainNewsBlock news={news}/>
            </motion.div>
        </>
    );
};

export default TopHeadlines
