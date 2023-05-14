import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { decode } from 'next-auth/jwt';
import { getSingleStudent } from '@/utils/fetcher';

function Header({ HeaderText }) {

  return (
    <div className="header bg-primary shadow">
      <div className="py-3">
        <h2 className='text-center text-white'>{HeaderText}</h2>
      </div>
    </div>
  );
}


export default Header