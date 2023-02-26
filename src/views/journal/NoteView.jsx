import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab'
import { SaveOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from '../../components';
import { useForm } from '../../hooks';
import { setActiveNote, startSaveNote } from '../../store';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active:note, isSaving, saveMessage } = useSelector( state => state.journal );

  const { title, body, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() => {
    return date ? new Date(date).toUTCString() : '';
  }, [ date ]);

  useEffect(() => {
    dispatch( setActiveNote( formState ) );
  }, [ formState ]);

  useEffect(() => {
    if (saveMessage.length > 0) {
      Swal.fire({
        icon: 'success',
        title: saveMessage,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }, [ saveMessage ])

  const handleSaveNote = () => {
    dispatch( startSaveNote() );
  }

  const handleFilesSaved = ({ target }) => {
    console.log(target.value)
  }
  
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb:1 }} >
      <Grid item >
        <Typography fontSize={39} fontWeight='light' >{ dateString }</Typography>
      </Grid>

      <Grid item >
        <LoadingButton
          size="small"
          color="primary"
          onClick={handleSaveNote}
          loading={isSaving}
          loadingPosition="start"
          startIcon={<SaveOutlined />}
          variant="contained"
        >
          <span>Guardar</span>
        </LoadingButton>
      </Grid>

      <Grid container >
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingresa un Título'
          label='Título'
          sx={{ mb: 1, border: 'none' }}
          name='title'
          value={ title }
          onChange={ onInputChange }
        />
        
        <TextField
          type='text'
          variant='filled'
          multiline
          fullWidth
          placeholder='Descripción del dia'
          label='Descripción'
          minRows={ 5 }
          name='body'
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
