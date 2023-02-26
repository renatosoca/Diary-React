import { useMemo } from 'react';

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNotOutlined } from '@mui/icons-material';

export const SideBarItem = ({ title = '', body, id }) => {
  const newTitle = useMemo(() => {
    return title.length > 15 ? `${title.substring(0, 15)}...` : title;
  }, [ title ])

  return (
    <ListItem disablePadding >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNotOutlined /> 
        </ListItemIcon>

        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ body } />
        </Grid>
      </ListItemButton>
    </ListItem>
  )
}
