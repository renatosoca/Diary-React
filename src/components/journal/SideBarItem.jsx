import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNotOutlined } from '@mui/icons-material';
import { setActiveNote } from '../../store';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  const newTitle = useMemo(() => {
    return title.length > 15 ? `${title.substring(0, 15)}...` : title;
  }, [ title ]);

  const dispatch = useDispatch();

  const handleShowNote = () => {
    dispatch( setActiveNote({ title, body, id, date, imageUrls }) )
  }

  return (
    <ListItem disablePadding >
      <ListItemButton onClick={ handleShowNote }>
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
