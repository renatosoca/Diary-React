import { PaletteOptions } from '@mui/material';

interface CustomColor {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

interface CustomPaletteOptions extends PaletteOptions {
  primary: CustomColor;
  custom: {
    [key: string]: CustomColor;
  };
}

export const palette: CustomPaletteOptions = {
  primary: {
    main: '#4264CB',
    light: '#4264CB',
    dark: '#4485E4',
  },
  secondary: {
    main: '#212121',
    light: '#212121',
    dark: '#78a240',
  },

  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  text: {
    primary: '#000000',
    secondary: '#747474',
    disabled: '#cacccd',
  },
  common: {
    black: '#000000',
    white: '#ffffff',
  },
  success: {
    main: '#78a240',
    light: '#78a240',
    dark: '#78a240',
  },
  error: {
    main: '#ff0000',
    light: '#ff0000',
    dark: '#ff0000',
  },
  warning: {
    main: '#ff9800',
    light: '#ff9800',
    dark: '#ff9800',
  },
  info: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#144a7d',
  },
  custom: {
    gray: {
      main: '#747474',
      dark: '#5d5d5d',
    },
    notFound: {
      main: '#4B56E8',
      dark: '#4B56E8',
    },
    disabled: {
      main: '#ededed',
      dark: '#cacccd',
    },
    primaryHover: {
      main: '#535C91',
      dark: '#3a77e8',
    },
    secondaryHover: {
      main: '#9DD455',
      dark: '#9DD455',
    },
    background: {
      main: '#4264CB',
      dark: '#4264CB',
    },
    backgroundHover: {
      main: '#6C89DD',
      dark: '#6C89DD',
    },
  },
};
