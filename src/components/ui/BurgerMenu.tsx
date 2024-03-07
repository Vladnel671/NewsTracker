import { IconButton, Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from '../../styles/main.module.scss'
import { scrollToTop } from '../../utils/NewsUtils.ts'

const BurgerMenu: React.FC = () => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMenuItemClick = () => {
    handleClose()

    navigate('/allnews')
    scrollToTop()
  }

  return (
    <div className={styles['burger-menu-block']}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: '10001' }}
      >
        <MenuItem onClick={() => handleMenuItemClick()}>U.S.</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>International</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Entertainment</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Business</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Technology</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Lifestyle</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Health</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>
          Virtual Reality
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Weather</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick()}>Sports</MenuItem>
      </Menu>
    </div>
  )
}

export default BurgerMenu
