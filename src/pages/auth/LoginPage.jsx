import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Google } from '@mui/icons-material';
import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';

import { AuthLayout } from '../../layout';
import { useForm } from '../../hooks';
import { startGoogleLogin, startLoginEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {
  const [ formSubmitted, setFormSubmitted ] = useState( false );

  const dispach = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth );

  const formValidations = {
    email: [ (value) => value.includes('@'), 'Tiene que ser un email válido.' ],
    password: [ (value) => value.length > 5, 'La contraseña debe tener al menos 6 caracteres.' ]
  };
  
  const { formState, email, password, onInputChange, isFormValid, emailValid, passwordValid } = useForm( formData, formValidations );
  
  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const handleSubmitEmailPasswordLogin = (e) => {
    e.preventDefault();
    setFormSubmitted( true );
    
    if ( !isFormValid ) return;
    dispach( startLoginEmailPassword( formState ) );
  }

  const handleGoogleLogin = () => {
    dispach( startGoogleLogin() );
  }

  return (
    <AuthLayout title='Login' >
      <form onSubmit={ handleSubmitEmailPasswordLogin } >
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
              error = { !!emailValid && formSubmitted }
              helperText = { formSubmitted && emailValid }
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
              error = { !!passwordValid && formSubmitted }
              helperText = { formSubmitted && passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb:2, mt: 1 }} >
            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' } >
              <Alert severity='error' >
                { errorMessage }
              </Alert>
            </Grid>

            <Grid item xs={ 12 } md={ 6 } >
              <Button
                disabled={ isAuthenticating }
                variant='contained'
                type='submit'
                fullWidth 
              >
                Login
              </Button>
            </Grid>
            
            <Grid item xs={ 12 } md={ 6 } >
              <Button
                disabled={ isAuthenticating }
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