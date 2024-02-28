import React from 'react'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../styles/main.module.scss'

const SkeletonBlock = ({ count = 1 }) => (
  <>
    <Skeleton
      style={{ marginBottom: '5px' }}
      width={'265px'}
      height={'180px'}
    />
    {[...Array(count)].map((_, index) => (
      <div key={index} style={{ marginTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Skeleton width={'120px'} height={'70px'} />
          <Skeleton
            style={{ marginLeft: '10px' }}
            height={'5px'}
            width={'120px'}
            count={3}
          />
        </div>
      </div>
    ))}
  </>
)

const MainSkeleton: React.FC = () => (
  <div className={styles['news-skeleton-main-block']}>
    <div>
      <SkeletonBlock count={3} />
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'max-content',
      }}
    >
      <Skeleton style={{}} width={'500px'} height={'250px'} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            marginTop: '10px',
          }}
        >
          <Skeleton
            style={{ marginLeft: '50px' }}
            width={'120px'}
            height={'70px'}
          />
          <Skeleton
            style={{ marginLeft: '10px' }}
            height={'5px'}
            width={'190px'}
            count={2}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            marginTop: '10px',
          }}
        >
          <Skeleton
            style={{ marginLeft: '50px' }}
            width={'120px'}
            height={'70px'}
          />
          <Skeleton
            style={{ marginLeft: '10px' }}
            height={'5px'}
            width={'190px'}
            count={2}
          />
        </div>
      </div>
    </div>
    <div>
      <SkeletonBlock count={3} />
    </div>
  </div>
)

export default MainSkeleton
