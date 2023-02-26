import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';
import { Navbar, SideBar } from '../../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const { uid } = useSelector( state => state.auth );

  return (
    <Box sx={{ display: 'flex' }}>

      <Navbar drawerWidth={ drawerWidth } />

      <SideBar drawerWidth={ drawerWidth } />

      <Box
        components='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        className='animate__animated animate__fadeIn'
      >
        <Toolbar />

        { !uid && <Navigate to='/auth/login' /> }

        { children }

      </Box>
    </Box>
  )
}
