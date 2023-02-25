import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Typography, TextField, Button, Link, Alert } from '@mui/material';

import { AuthLayout } from '../../layout';
import { useForm } from '../../hooks';
import { startCreateUser } from '../../store/auth';

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

  const [ formSubmitted, setFormSubmitted ] = useState( false )

  const formData = {
    email: '',
    password: '',
    displayName: '',
  };

  const formValidations = {
    email: [ (value) => value.includes('@'), 'Tiene que ser un email valido.' ],
    password: [ (value) => value.length > 5, 'La contraseña debe tener al menos 6 caracteres.' ],
    displayName: [ (value) => value.length > 2, 'El nombre debe tener al menos 3 caracteres.' ],
  };

  const { formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } = useForm( formData, formValidations );

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted( true );
    if ( !isFormValid ) return;
    
    dispatch( startCreateUser( formState ) );
  }

  return (
    <AuthLayout title='Registro' >
      <form onSubmit={ handleSubmit } >
        <Grid container>
          
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField 
              label="Nombre Completo" 
              type="text" 
              placeholder="Tu nombre" 
              fullWidth 
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error = { !!displayNameValid && formSubmitted }
              helperText = { formSubmitted && displayNameValid }
            />
          </Grid>

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

            <Grid item xs={ 12 } >
              <Button 
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained' 
                fullWidth 
              >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={ 'row' } justifyContent='start' >
            <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login' >
              Inicia Sesion
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
