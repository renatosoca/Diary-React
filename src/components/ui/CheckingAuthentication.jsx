import { CircularProgress, Grid } from '@mui/material';

export const CheckingAuthentication = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent='center'
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '1rem' }}
    >
      <Grid 
        container 
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  )
}
