import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react';
import Passcode from '../Passcode';

function BottomNav() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <Passcode open={open} handleClick={handleClick} />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Get Attendance" icon={<RestoreIcon />} onClick={handleClick} />
        <BottomNavigationAction label="View Acitivity" icon={<FavoriteIcon />} />
      </BottomNavigation>

    </>
  )
}

export default BottomNav