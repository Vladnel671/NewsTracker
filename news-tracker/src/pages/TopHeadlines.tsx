import React, {useEffect} from 'react'
import MainLoadingScreen from "../components/MainLoadingScreen.tsx"
import {useGetData} from "../hooks/useGetData.ts"
import {useSelector} from "react-redux"
import {RootState} from "../types/types.ts"
import MainNewsBlock from "../pages/MainNewsBlock.tsx";

const TopHeadlines: React.FC = () => {
    const getData = useGetData();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines);

    useEffect(() => {
        if (!news.length) {
            getData()
        }
    }, [getData, news.length])

    if (!news.length || isLoading) return <MainLoadingScreen/>

    return (
        <>
                <MainNewsBlock news={news} />
        </>
    );
};

export default TopHeadlines;
