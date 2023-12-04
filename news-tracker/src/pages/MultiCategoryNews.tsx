import React from 'react'
import styles from '../styles/main.module.scss'

const MultiCategoryNews: React.FC = () => {
    return (
        <div className={styles.multiNewsBlock}>
            <div className={styles.multiNewsFirstBlock}>
                <span>US POLITICS</span>
            </div>
            <div className={styles.multiNewsSecondBlock}>
                <span>SCIENCE AND HEALTH</span>
            </div>
            <div className={styles.multiNewsThirdBlock}>
                <span>TECH</span>
            </div>
        </div>
    );
};

export default MultiCategoryNews