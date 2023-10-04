import styles from './App.module.scss'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import AllNews from "./components/AllNews.tsx";
import {Route, Routes} from "react-router-dom";
import TopHeadlines from "./components/TopHeadlines.tsx";
function App() {
    return (
        <div className={styles.mainBlock}>
            <Header/>
            <Routes>
                <Route path='/' element={<AllNews/>}/>
                <Route path='/allnews' element={<AllNews/>}/>
                <Route path='/topheadlines' element={<TopHeadlines/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App
