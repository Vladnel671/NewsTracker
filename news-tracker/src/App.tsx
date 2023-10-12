import styles from './App.module.css'
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AllNews from "./components/News/AllNews/AllNews.tsx";
import {Route, Routes} from "react-router-dom";
import TopHeadlines from "./components/News/TopHeadlines/TopHeadlines.tsx";
import {useSpring, animated} from '@react-spring/web'

function App() {
    const springs = useSpring({
        from: {opacity: 0, transform: "translateY(-4rem)"},
        to: {opacity: 1, transform: "translateY(0rem)"},
        config: {duration: 300}
    })

    return (
        <div className={styles.mainBlock}>
            <animated.div
                style={{
                    ...springs,
                }}>
                <Header/>
                <Routes>
                    <Route path='/' element={<AllNews/>}/>
                    <Route path='/allnews' element={<AllNews/>}/>
                    <Route path='/topheadlines' element={<TopHeadlines/>}/>
                </Routes>
                <Footer/>
            </animated.div>
        </div>
    )
}

export default App
