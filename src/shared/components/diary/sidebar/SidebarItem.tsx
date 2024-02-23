import { FC, useMemo } from 'react';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { INote } from '@/domain/entities';
import { useAppDispatch } from '@/shared/hooks';
import { setActiveNote } from '@/store';
import { ICONS } from '@/shared/assets';

interface SidebarItemProps {
  note: INote;
}

export const SidebarItem: FC<SidebarItemProps> = ({ note }) => {
  const dispatch = useAppDispatch();

  const newTitle = useMemo(() => {
    return note.title.length > 15 ? `${note.title.substring(0, 15)}...` : note.title;
  }, [note.title]);

  const newSubtitle = useMemo(() => {
    return note.body.length > 30 ? `${note.body.substring(0, 30)}...` : note.body;
  }, [note.body]);

  const handleShowNote = () => {
    dispatch(setActiveNote(note));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          ':hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={handleShowNote}
      >
        <ListItemIcon sx={{ fontSize: '1.5rem' }}>{ICONS.NOTE}</ListItemIcon>

        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText>
            <Typography component={'p'} variant="body1" sx={{ color: 'text.secondary' }}>
              {newSubtitle}
            </Typography>
          </ListItemText>
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
