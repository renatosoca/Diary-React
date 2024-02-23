import { FormEvent, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Button, Link, Box, IconButton, List, ListItem, Tooltip } from '@mui/material';
import { modulePublicRoutes } from '@/domain/entities';
import { startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '@/store';
import { InputComponent } from '@/shared/components';
import { useAppDispatch, useAppSelector, useHandleForm } from '@/shared/hooks';
import { PublicAuthLayout } from '@/shared/layouts';
import { ICONS } from '@/shared/assets';
import { loginValidations } from './validations';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const {
    params,
    errors,
    isFormValid,

    handleInputChange,
  } = useHandleForm(initialValues, loginValidations);

  const handleSubmitEmailPasswordLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;
    dispatch(startLoginEmailPassword(params));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin());
  };

  return (
    <PublicAuthLayout>
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
          Iniciar sesión
        </Typography>

        <Box component="form" onSubmit={handleSubmitEmailPasswordLogin} width={'100%'} mb={'2rem'}>
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
              Login
            </Button>
          </Box>
        </Box>

        <Box width={'100%'} sx={{ textAlign: 'center' }} mb={'1.5rem'}>
          <Typography component="h2" sx={{ color: 'text.secondary', position: 'relative', mb: '1rem' }} className="auth__text">
            <Typography
              component="span"
              variant="body1"
              sx={{ backgroundColor: 'background.default', position: 'relative', zIndex: 100, px: '1rem' }}
              fontSize={'1rem'}
            >
              O inicia sesión con
            </Typography>
          </Typography>

          <List sx={{ display: 'flex', justifyContent: 'center', gap: '.5rem', listStyle: 'none', p: 0 }}>
            <ListItem disablePadding sx={{ width: 'max-content', borderRadius: '10rem' }}>
              <Tooltip title="Google" placement="bottom" arrow>
                <IconButton type="button" onClick={handleGoogleLogin} sx={{ border: 'solid 1px transparent', borderColor: '#cacccd' }}>
                  {ICONS.GOOGLE}
                </IconButton>
              </Tooltip>
            </ListItem>

            <ListItem disablePadding sx={{ width: 'max-content', borderRadius: '10rem' }}>
              <Tooltip title="Facebook" placement="bottom" arrow>
                <IconButton
                  type="button"
                  onClick={handleFacebookLogin}
                  sx={{ border: 'solid 1px transparent', borderColor: '#cacccd', color: '#35579c' }}
                >
                  {ICONS.FACEBOOK}
                </IconButton>
              </Tooltip>
            </ListItem>
          </List>
        </Box>

        <Grid container direction={'row'} justifyContent="center">
          <Typography>¿Aún no tienes tu cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to={modulePublicRoutes.registerPage} ml={'.5rem'} sx={{ color: 'primary.main' }}>
            Crear tu cuenta
          </Link>
        </Grid>
      </Box>
    </PublicAuthLayout>
  );
};

export default LoginPage;
