import styles from './App.module.scss'
import News from "./News.tsx";

function App() {
    return (
        <div className={styles.mainBlock}>
            <header className={styles.HeaderBlock}>Header</header>
            <News/>
            <footer className={styles.FooterBlock}>Footer</footer>
        </div>
    )
}

export default App
