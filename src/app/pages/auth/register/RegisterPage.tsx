import { FormEvent, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Button, Link, Box } from '@mui/material';
import { modulePublicRoutes } from '@/domain/entities';
import { startCreateUser } from '@/store';
import { useAppDispatch, useAppSelector, useHandleForm } from '@/shared/hooks';
import { PublicAuthLayout } from '@/shared/layouts';
import { InputComponent } from '@/shared/components';
import { registerValidations } from './validations';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const {
    params,
    errors,
    isFormValid,

    handleInputChange,
  } = useHandleForm(initialValues, registerValidations);

  const handleCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startCreateUser(params));
  };

  return (
    <PublicAuthLayout direction="row-reverse">
      <Box component={'article'} maxWidth={'30rem'} width={'100%'} px={'1rem'}>
        <Typography
          component="h1"
          variant="h1"
          fontSize={'3.5rem'}
          fontFamily={'"Raleway",sans-serif'}
          fontWeight={'900'}
          textAlign={'center'}
          mb={'2rem'}
          sx={{
            '@media (width <= 900px)': {
              fontSize: '2rem',
            },
          }}
        >
          Crear cuenta
        </Typography>

        <Box component="form" onSubmit={handleCreate} width={'100%'} mb={'2rem'}>
          <Grid item xs={12} mb={'1rem'}>
            <InputComponent
              label="Nombre completo"
              placeholder="Ingrese su nombre completo"
              fullWidth
              name="fullName"
              value={params.fullName}
              onChange={handleInputChange}
              error={!!errors.fullName && formSubmitted}
              helperText={formSubmitted && errors.fullName ? `${errors.fullName}` : undefined}
            />
          </Grid>

          <Grid item xs={12} mb={'1rem'}>
            <InputComponent
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={params.email}
              onChange={handleInputChange}
              error={!!errors.email && formSubmitted}
              helperText={formSubmitted && errors.email ? `${errors.email}` : undefined}
            />
          </Grid>

          <Grid item xs={12} mb={'1rem'}>
            <InputComponent
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={params.password}
              onChange={handleInputChange}
              error={!!errors.password && formSubmitted}
              helperText={formSubmitted && errors.password ? `${errors.password}` : undefined}
            />
          </Grid>

          <Box>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disabled={isLoading}
              sx={{
                ':hover': {
                  backgroundColor: 'custom.primaryHover.main',
                },
              }}
            >
              Crear cuenta
            </Button>
          </Box>
        </Box>

        <Grid container direction={'row'} justifyContent="center">
          <Typography>¿Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to={modulePublicRoutes.loginPage} ml={'.5rem'} sx={{ color: 'primary.main' }}>
            Inicia sesión
          </Link>
        </Grid>
      </Box>
    </PublicAuthLayout>
  );
};

export default RegisterPage;
