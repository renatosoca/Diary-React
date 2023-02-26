import { useDispatch, useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../../layout';
import { NoteView, NothingSelectedView } from '../../views';
import { startNewNote } from '../../store';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal);
  
  const handleNewNote = () => {
    dispatch( startNewNote() );
  }
  
  return (
    <JournalLayout >

      {
        ( !!active )
        ? <NoteView /> 
        : <NothingSelectedView />
      }

      <IconButton 
        disabled={ isSaving }
        size='large'
        sx={{ 
          color: 'white', 
          backgroundColor: 'error.main', 
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 }, 
          position: 'fixed', 
          right: 50,
          bottom: 50,
        }}
        onClick={ handleNewNote }
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
