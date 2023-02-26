import { useSelector } from 'react-redux';

import { Grid, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

export const AuthLayout = ({ children, title = '' }) => {
  const { uid } = useSelector( state => state.auth );
  
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
        className='box-shadow animate__animated animate__fadeIn'
        xs={12}
        sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: '1rem', borderRadius: '.3rem' }}
      >
        <Typography variant='h5' sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }} >{ title }</Typography>

        { uid && <Navigate to='/journal' /> }

        { children }

      </Grid>
    </Grid>
  )
}
