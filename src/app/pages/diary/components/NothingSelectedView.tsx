import { Grid, Typography } from '@mui/material';
import { FiStar } from 'react-icons/fi';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc( 100vh - 110px )', backgroundColor: 'primary.main', borderRadius: 2 }}
    >
      <Grid item xs={12}>
        <FiStar color="white" size={'2.5rem'} />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" color="white" padding={'0 1rem'}>
          Selecciona una Nota
        </Typography>
      </Grid>
    </Grid>
  );
};
