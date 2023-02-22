import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { JournalLayout } from '../../layout';
import { NoteView, NothingSelectedView } from '../../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Veniam ipsum tempor ullamco ullamco aute id. Aliqua aute ut voluptate excepteur laboris. Do dolor cillum minim cupidatat ad et mollit ex id. Velit in aliqua laboris adipisicing excepteur Lorem. Dolore duis in qui deserunt eiusmod ex veniam et qui cupidatat. Cupidatat cupidatat commodo Lorem consequat sit laboris cillum. Ipsum ipsum aute nostrud ea est eiusmod nostrud excepteur nisi fugiat cupidatat.</Typography> */}

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton 
        size='large'
        sx={{ 
          color: 'white', 
          backgroundColor: 'error.main', 
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 }, 
          position: 'fixed', 
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
