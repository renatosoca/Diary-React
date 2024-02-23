import { FormEvent, useEffect, useMemo } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { setActiveNote, startDeleteNote, startSaveImages, startUpdateNote } from '@/store';
import { INote } from '@/domain/entities';
import { useAppDispatch, useAppSelector, useHandleForm } from '@/shared/hooks';
import { getTodayUserDate } from '@/shared/utils';
import { ImageGallery } from '.';
import { InputComponent } from '@/shared/components';
import { ICONS } from '@/shared/assets';

const initialValues: INote = {
  id: '',
  title: '',
  body: '',
  date: new Date(),
  imageUrls: [],
};

export const NoteView = () => {
  const dispatch = useAppDispatch();
  const { active, status } = useAppSelector((state) => state.diary);

  const { params, handleInputChange } = useHandleForm(active || initialValues);

  const dateString = useMemo(() => {
    return params.date ? getTodayUserDate(params.date) : '';
  }, [params.date]);

  useEffect(() => {
    dispatch(setActiveNote(params));
  }, [params]);

  const handleSaveNote = () => {
    dispatch(startUpdateNote());
  };

  const handleFilesSaved = ({ target }: FormEvent<HTMLLabelElement>) => {
    const input = target as HTMLInputElement;

    if (!input.files) return;

    dispatch(startSaveImages(input.files));
  };

  const handleDeleteNote = () => {
    dispatch(startDeleteNote());
  };

  const handleCancelUpdate = () => {
    dispatch(setActiveNote(null));
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid container justifyContent={'space-between'} alignItems={'center'} pb={'1rem'}>
        <Grid item display={'flex'} alignItems={'center'} direction={'row'} gap={'.5rem'}>
          <Box sx={{ fontSize: '1.5rem' }}>{ICONS.CALENDAR}</Box>
          <Typography component={'h3'} fontSize={'1.8rem'} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            component="label"
            onChange={handleFilesSaved}
            disabled={status === 'saving-images'}
            endIcon={ICONS.CAMERA}
          >
            Subir Imágenes
            <input hidden accept="image/*" multiple type="file" />
          </Button>

          <Button
            size="large"
            color="primary"
            onClick={handleSaveNote}
            variant="contained"
            sx={{ ml: 1 }}
            disabled={status === 'updated'}
            endIcon={ICONS.UPDATE}
          >
            <span>Actualizar</span>
          </Button>
        </Grid>
      </Grid>

      <Grid container gap={'1rem'}>
        <InputComponent
          label="Título"
          name="title"
          placeholder="Ingresa un Título"
          fullWidth
          value={params.title}
          onChange={handleInputChange}
        />

        <InputComponent
          label="Descripción"
          name="body"
          placeholder="Descripción del dia"
          multiline
          fullWidth
          minRows={5}
          value={params.body}
          onChange={handleInputChange}
        />
      </Grid>

      <ImageGallery images={active?.imageUrls || []} />

      <Grid container justifyContent="end" sx={{ mt: '1rem' }} gap={'.5rem'}>
        <Button
          variant="contained"
          onClick={handleCancelUpdate}
          disabled={status === 'deleted'}
          sx={{
            backgroundColor: 'error.main',
            ':hover': {
              backgroundColor: 'error.dark',
            },
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          onClick={handleDeleteNote}
          disabled={status === 'deleted'}
          sx={{
            backgroundColor: 'error.main',
            ':hover': {
              backgroundColor: 'error.dark',
            },
          }}
          endIcon={ICONS.DELETE}
        >
          Eliminar Nota
        </Button>
      </Grid>
    </Grid>
  );
};
