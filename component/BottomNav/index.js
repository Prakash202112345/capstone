import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react';
import Passcode from '../Passcode';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

function BottomNav() {
  const router = useRouter()
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
        <BottomNavigationAction label="Log out" icon={<FavoriteIcon />} onClick={() => signOut({ redirect: false }).then((response) => { router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`) })} />
      </BottomNavigation>

    </>
  )
}

export default BottomNav