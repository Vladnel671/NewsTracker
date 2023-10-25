import {Route, Routes} from "react-router-dom";
import TopHeadlines from "./components/News/TopHeadlines/TopHeadlines.tsx";
import AllNews from "./components/News/AllNews/AllNews.tsx";
import NotFound from "./components/ErrorComponent/NotFound.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<TopHeadlines/>}/>
            <Route path='/allnews' element={<AllNews/>}/>
            <Route path='/topheadlines' element={<TopHeadlines/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};
