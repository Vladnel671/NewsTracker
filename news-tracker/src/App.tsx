import styles from './App.module.scss'
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import AllNews from "./components/AllNews/AllNews.tsx";
import {Route, Routes} from "react-router-dom";
import TopHeadlines from "./components/TopHeadlines/TopHeadlines.tsx";
import {useSpring, animated} from '@react-spring/web'

function App() {
    const springs = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500}
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
