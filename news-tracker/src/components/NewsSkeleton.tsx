import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../styles/main.module.scss';

const SkeletonBlock = ({ count = 1 }) => (
    <>
        <Skeleton style={{ marginBottom: '5px' }} width={'350px'} height={'180px'} />
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
                    <Skeleton width={'150px'} height={'70px'} />
                    <Skeleton height={'5px'} width={'190px'} count={3} />
                </div>
            </div>
        ))}
    </>
);

const NewsSkeleton: React.FC = () => {
    return (
        <div className={styles.newsSkeletonMainBlock}>
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
                <Skeleton
                    style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '10px' }}
                    width={'600px'}
                    height={'300px'}
                />
                <div style={{ display: 'flex', flexDirection: 'column', width: '600px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', marginTop: '10px' }}>
                        <Skeleton width={'150px'} height={'70px'} />
                        <Skeleton style={{ marginLeft: '10px' }} height={'5px'} width={'240px'} count={2} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', marginTop: '10px' }}>
                        <Skeleton width={'150px'} height={'70px'} />
                        <Skeleton style={{ marginLeft: '10px' }} height={'5px'} width={'240px'} count={2} />
                    </div>
                </div>
            </div>
            <div>
                <SkeletonBlock count={3} />
            </div>
        </div>
    );
};

export default NewsSkeleton;