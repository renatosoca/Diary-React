import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Google } from '@mui/icons-material';
import { Grid, Typography, TextField, Button, Link } from '@mui/material';

import { AuthLayout } from '../../layout';
import { useForm } from '../../hooks';
import { checkingAuthenticate, startGoogleLogin } from '../../store/auth';

export const LoginPage = () => {

  const { email, password, onInputChange, formState } = useForm({
    email: 'correo@correo.com',
    password: '123456',
  });
  const dispach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispach( checkingAuthenticate() );
  }

  const handleGoogleLogin = () => {
    dispach( startGoogleLogin() );
  }

  return (
    <AuthLayout title='Login' >
      <form onSubmit={ handleSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField 
              label="Correo" 
              type="email" 
              placeholder="correo@correo.com" 
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mb: 1 }}>
            <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="Contraseña" 
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt: 1 }} >
            <Grid item xs={ 12 } md={ 6 } >
              <Button 
                variant='contained'
                type='submit'
                fullWidth 
              >
                Login
              </Button>
            </Grid>
            
            <Grid item xs={ 12 } md={ 6 } >
              <Button 
                variant='contained' 
                type='button'
                onClick={ handleGoogleLogin }
                fullWidth 
              >
                <Google />
                <Typography sx={{ ml: 1 }} >Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={ 'row' } justifyContent='end' >
            <Link component={ RouterLink } color='inherit' to='/auth/register' >
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}