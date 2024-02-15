import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import React from 'react'

import styles from '../styles/main.module.scss'
import { CustomPaginationProps } from '../types/types.ts'

const Paginator: React.FC<CustomPaginationProps> = ({
  count,
  page,
  onChange,
}) => (
  <Pagination
    style={{
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '30px',
    }}
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
      '& .MuiPaginationItem-page': {
        color: '#ffffff',
        borderRadius: '10px',
        height: '40px',
        width: '60px',
        '&:hover': {
          backgroundColor: '#2b2b2b',
          color: '#ffffff',
          borderRadius: '10px',
        },
      },
      '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: '#ffffff',
        color: '#000000',
        '&:hover': {
          backgroundColor: '#cccccc',
          color: '#000000',
        },
      },
      '& .MuiPaginationItem-previous .MuiPaginationItem-root, & .MuiPaginationItem-next .MuiPaginationItem-root':
        {
          color: '#ffffff',
        },
      '& .MuiPaginationItem-icon': {
        color: '#cccccc',
      },
      '& .MuiPaginationItem-ellipsis': {
        color: '#cccccc',
      },
    }}
  />
)

export default Paginator
