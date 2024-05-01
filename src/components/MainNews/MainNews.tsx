import React from 'react'

import CentralBlock from './CentralBlock'
import SideBlock from './SideBlock'
import styles from '../../styles/main.module.scss'
import { MainNewsProps } from '../../types/types'

const MainNews: React.FC<MainNewsProps> = ({
  firstColumnNews,
  secondColumnNews,
  thirdColumnNews,
}) => (
  <section className={styles['main-news-block']}>
    <SideBlock newsData={firstColumnNews} />
    <CentralBlock newsData={secondColumnNews} />
    <SideBlock newsData={thirdColumnNews} />
  </section>
)

export default MainNews
