import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import { startLoadingNotes } from '@/store';
import { Navbar, SideBar } from '@/shared/components';
import { useAppDispatch } from '@/shared/hooks';

const drawerWidth = '15rem';

const PrivateJournalLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startLoadingNotes());
  }, []);

  return (
    <Stack direction="row" minHeight={'100vh'}>
      <SideBar drawerWidth={drawerWidth} />

      <Box sx={{ width: { xs: '100%', md: `calc(100% - ${drawerWidth})` }, position: 'relative' }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', px: '1.5rem', pb: '1.5rem', pt: '5.2rem' }}>
          <Outlet />
        </Box>
      </Box>
    </Stack>
  );
};
export default PrivateJournalLayout;
