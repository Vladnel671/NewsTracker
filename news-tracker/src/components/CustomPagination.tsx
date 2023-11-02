import Pagination from '@mui/material/Pagination'
import {CustomPaginationProps} from "../types/types.ts"
import React from "react"
import styles from '../styles/main.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PaginationItem from '@mui/material/PaginationItem';

const CustomPagination: React.FC<CustomPaginationProps> = ({count, page, onChange}) => (
    <Pagination
        className={styles.pagination}
        count={count}
        page={page}
        onChange={onChange}
        color="secondary"
        size="large"
        renderItem={(item) => (
            <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
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
            "& .MuiPaginationItem-previous .MuiPaginationItem-root": {
                color: '#ffffff',
            },
            "& .MuiPaginationItem-next .MuiPaginationItem-root": {
                color: '#ffffff',
            }
        }}
    />
);

export default CustomPagination
