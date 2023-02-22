import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../../components';

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }} >
      <Grid item >
        <Typography fontSize={39} fontWeight='light' >Titulo de la Nota</Typography>
      </Grid>

      <Grid item >
        <Button color='primary' sx={{ padding: 1, border: 1 }} >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container >
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingresa un Título'
          label='Título'
          sx={{ mb: 1, border: 'none' }}
        />
        
        <TextField
          type='text'
          variant='filled'
          multiline
          fullWidth
          placeholder='Descripción del dia'
          label='Descripción'
          minRows={ 5 }
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
