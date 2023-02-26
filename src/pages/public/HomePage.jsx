import { useState } from 'react';

import { Grid} from '@mui/material';
import { LoadingButton } from '@mui/lab'

import { SaveOutlined } from '@mui/icons-material';

export const HomePage = () => {
  const [ loading, setLoading ] = useState(false);

  const handleSaveNote = () => {
    setLoading(true);
  }
  
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }} >

      <Grid item >

        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleSaveNote}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveOutlined />}
          variant="contained"
        >
          <span>Guardar</span>
        </LoadingButton>
      </Grid>
    </Grid>
  )
}
