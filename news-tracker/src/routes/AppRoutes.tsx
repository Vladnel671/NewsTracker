import {Route, Routes} from "react-router-dom";
import TopHeadlines from "../pages/TopHeadlines.tsx";
import AllNews from "../pages/AllNews.tsx";
import NotFound from "../pages/NotFound.tsx";

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
