import { Theme } from '@emotion/react';
import { Components } from '@mui/material';
import { palette } from './palette';

export const components: Components<Omit<Theme, 'components'>> | undefined = {
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: palette.text?.secondary,
        transform: 'translate(1rem, .9rem) scale(1)',
        [`@media (width >=  900px)`]: {
          transform: 'translate(1rem, 1rem) scale(1)',
        },
        '&.Mui-focused': {
          transform: 'translate(1rem, -.4rem) scale(0.75)',
        },
        '&.MuiFormLabel-filled': {
          transform: 'translate(1rem, -.4rem) scale(0.75)',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        '@media (width >= 900px)': {
          fontSize: '1.1rem',
        },
        '&.Mui-disabled': {
          backgroundColor: palette.custom.disabled.main,
          cursor: 'not-allowed',
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '.3rem',
      },
      input: {
        padding: '.8rem 1rem',
      },
      multiline: {
        padding: 0,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: '.9rem',
        textTransform: 'none',
        color: palette.common?.white,
        backgroundColor: palette.primary.main,
        boxShadow: 'none',
        borderRadius: '.3rem',
        transition: 'background-color .2s ease-in, color .2s ease-in',

        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
    variants: [
      {
        props: { size: 'medium' },
        style: {
          padding: '.5rem 1rem',
        },
      },
    ],
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: 'Catamaran, sans-serif',
      },
    },
    variants: [
      {
        props: { variant: 'h5' },
        style: {
          padding: '.8rem 1rem',
          fontWeight: 400,
          fontSize: '1rem',
          lineHeight: '22.5px',
          '@media (width >= 900px)': {
            fontSize: '1.2rem',
          },
        },
      },
      {
        props: { variant: 'body2' },
        style: {
          fontSize: '1.2rem',
          '@media (width >= 900px)': {
            fontSize: '1.2rem',
          },
        },
      },
    ],
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        color: palette.text?.secondary,
        padding: '.5rem',
      },
    },
  },
};
