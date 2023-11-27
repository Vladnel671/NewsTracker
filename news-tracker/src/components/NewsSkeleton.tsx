import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const NewsSkeleton: React.FC = () => {
    return (
        <div>
            <Skeleton count={3} height={'100px'}/>
            <Skeleton count={3} height={'100px'}/>
        </div>
    )
}

export default NewsSkeleton;