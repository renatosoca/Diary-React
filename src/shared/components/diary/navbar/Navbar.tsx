import { AppBar, Toolbar, IconButton, Grid, Typography, Avatar, Box, Menu, MenuItem } from '@mui/material';
import { startLogout } from '@/store/actions';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { ICONS } from '@/shared/assets';
import { MouseEvent, useState } from 'react';
import { setOpenSidebar } from '@/store';

export const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ auth }) => auth);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleOpenSidebar = () => dispatch(setOpenSidebar(true));

  return (
    <AppBar position="absolute" sx={{ width: `100%`, boxShadow: 'none', backgroundColor: 'custom.background.main' }}>
      <Toolbar>
        <Grid container direction="row" justifyContent={{ xs: 'space-between', md: 'flex-end' }} alignItems="center">
          <IconButton sx={{ color: 'common.white', display: { md: 'none' } }} onClick={handleOpenSidebar}>
            {ICONS.HAMBURGER}
          </IconButton>

          <Box>
            <Box display={'flex'} alignItems={'center'}>
              <Typography textAlign="start" fontWeight={'medium'} color={'white'} mr={'.5rem'}>
                {user?.displayName}
              </Typography>

              <Avatar alt="Avatar" src={user?.photoURL} />

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'common.white' }}>
                {ICONS.ARROW_DOWN}
              </IconButton>
            </Box>

            <Menu
              sx={{ top: '5%' }}
              id="menu-appBar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Grid container alignItems="center" gap="1rem" justifyContent={'space-between'}>
                  <Typography textAlign="center">Cerrar sesión</Typography>
                  {ICONS.LOGOUT}
                </Grid>
              </MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
