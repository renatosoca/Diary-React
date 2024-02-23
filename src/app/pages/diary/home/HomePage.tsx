import { IconButton } from '@mui/material';
import { startNewNote } from '@/store';
import { ICONS } from '@/shared/assets';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { NoteView, NothingSelectedView } from '../components';

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { active } = useAppSelector(({ diary }) => diary);

  const handleNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      {!active && (
        <IconButton
          onClick={handleNewNote}
          disabled={false}
          size="large"
          sx={{
            position: 'fixed',
            right: 40,
            bottom: 40,
            backgroundColor: 'info.main',
            color: 'common.black',
            ':hover': {
              backgroundColor: 'info.dark',
            },
          }}
        >
          {ICONS.ADD}
        </IconButton>
      )}
    </>
  );
};

export default HomePage;
