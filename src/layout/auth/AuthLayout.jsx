import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent='center'
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '1rem' }}
    >
      <Grid item 
        className='box-shadow'
        xs={12}
        sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: '1rem', borderRadius: '.3rem' }}
      >
        <Typography variant='h5' sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }} >{ title }</Typography>

        { children }

      </Grid>
    </Grid>
  )
}
