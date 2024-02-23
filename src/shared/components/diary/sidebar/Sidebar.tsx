import { useEffect, useMemo, useRef } from 'react';
import { Drawer, Toolbar, Typography, Divider, List, ListItem, Skeleton, IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { SidebarItem } from '.';
import { ICONS } from '@/shared/assets';
import { setOpenSidebar } from '@/store';

const md = '900px';

export const SideBar = ({ drawerWidth = '15rem' }) => {
  const menuListRef = useRef<HTMLUListElement | null>(null);
  const menuBackDropRef = useRef<HTMLLIElement | null>(null);

  const dispatch = useAppDispatch();
  const { status, notes } = useAppSelector(({ diary }) => diary);
  const { isOpenSidebar } = useAppSelector(({ app }) => app);

  const isLoading = useMemo(() => status === 'loading', [status]);

  const handleMouseEnter = ({ currentTarget }: MouseEvent) => {
    const item = currentTarget as HTMLLIElement;

    const { left, top, width, height } = item.getBoundingClientRect();

    if (menuBackDropRef.current) {
      menuBackDropRef.current?.style.setProperty('--left', `${left / 16}rem`);
      menuBackDropRef.current?.style.setProperty('--top', `${top / 16}rem`);
      menuBackDropRef.current?.style.setProperty('--width', `${width / 16}rem`);
      menuBackDropRef.current?.style.setProperty('--height', `${height / 16}rem`);
      menuBackDropRef.current.style.opacity = '1';
      menuBackDropRef.current.style.visibility = 'visible';
    }
  };

  const handleMouseLeave = () => {
    if (menuBackDropRef.current) {
      menuBackDropRef.current.style.opacity = '0';
      menuBackDropRef.current.style.visibility = 'hidden';
    }
  };

  const handleCloseSidebar = () => dispatch(setOpenSidebar(false));

  const handleResize = () => {
    if (window.innerWidth <= parseInt(md, 10)) {
      dispatch(setOpenSidebar(false));
      return;
    }
    if (window.innerWidth >= parseInt(md, 10)) {
      dispatch(setOpenSidebar(true));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, { capture: true });

    return () => {
      window.removeEventListener('resize', handleResize, { capture: true });
    };
  }, []);

  useEffect(() => {
    const listLi = menuListRef.current?.querySelectorAll('li');

    listLi?.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      listLi?.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [notes, isOpenSidebar]);

  return (
    <>
      <Drawer
        variant={isOpenSidebar ? 'permanent' : 'temporary'}
        open={isOpenSidebar}
        onClose={handleCloseSidebar}
        sx={{ display: { xs: 'block' }, width: drawerWidth, '& .MuiDrawer-paper': { width: drawerWidth } }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            '@media (width >= 600px)': {
              px: '1rem',
            },
          }}
        >
          <Typography variant="h5" noWrap component="h2" p={0} fontWeight="bold">
            Diary App
          </Typography>

          <IconButton onClick={handleCloseSidebar}>{ICONS.CLOSE}</IconButton>
        </Toolbar>

        <Divider />

        {isLoading && (
          <List>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
            <ListItem sx={{ p: '.5rem' }}>
              <Skeleton variant="rectangular" width={'100%'} height={'3.2158203125rem'} />
            </ListItem>
          </List>
        )}

        {!isLoading && (
          <List ref={menuListRef}>
            {notes.map((note) => (
              <SidebarItem key={note.id} note={note} />
            ))}
          </List>
        )}

        <ListItem
          ref={menuBackDropRef}
          sx={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.10)',
            padding: '1rem',
            backdropFilter: 'blur(2rem)',
            left: 0,
            top: 0,
            transition:
              'transform 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
            transform: 'translate(var(--left), var(--top))',
            width: 'var(--width)',
            height: 'var(--height)',
            zIndex: -1,
            opacity: 0,
            visibility: 'hidden',
          }}
        />
      </Drawer>
    </>
  );
};
