import Pagination from '@mui/material/Pagination'
import {CustomPaginationProps} from "../types/types.ts"
import React from "react"
import styles from '../styles/main.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PaginationItem from '@mui/material/PaginationItem'

const Paginator: React.FC<CustomPaginationProps> = ({count, page, onChange}) => (
    <Pagination
        style={{
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '30px',
            background: 'var(--news-background-color)'
        }}
        className={styles.pagination}
        count={count}
        page={page}
        onChange={onChange}
        color="secondary"
        size="large"
        renderItem={(item) => (
            <PaginationItem
                slots={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                {...item}
            />
        )}
        sx={{
            "& .MuiPaginationItem-page": {
                color: '#ffffff',
            },
            "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: '#ffffff',
                color: '#000000',
                '&:hover': {
                    backgroundColor: '#cccccc',
                    color: '#000000'
                }
            },
            "& .MuiPaginationItem-previous .MuiPaginationItem-root, & .MuiPaginationItem-next .MuiPaginationItem-root": {
                color: '#ffffff',
            },
            "& .MuiPaginationItem-icon": {
                color: '#cccccc',
            },
            "& .MuiPaginationItem-ellipsis": {
                color: '#cccccc',
            },
        }}
    />
);

export default Paginator
