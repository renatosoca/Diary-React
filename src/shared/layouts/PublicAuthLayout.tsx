import { FC } from 'react';
import { Grid, GridDirection, Paper } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
  direction?: GridDirection;
}
export const PublicAuthLayout: FC<AuthLayoutProps> = ({ children, direction = 'row' }) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }} direction={direction}>
      <Grid
        item
        sm={false}
        md={6}
        lg={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Grid item xs={12} sm={12} md={6} lg={5} component={Paper} square display="flex" justifyContent="center" alignItems="center">
        {children}
      </Grid>
    </Grid>
  );
};
