import { useSelector } from 'react-redux';

import { Box, Drawer, Toolbar, Typography, Divider, List } from '@mui/material';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth = 240 }) => {
  
  const { displayName } = useSelector( state => state.auth );
  const { notes } = useSelector( state => state.journal );
  
  return (
    <Box
        components='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open={ true }
        sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div' >
            { displayName }
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            notes.map( (note) => (
              <SideBarItem key={note.id} {...note} />
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
