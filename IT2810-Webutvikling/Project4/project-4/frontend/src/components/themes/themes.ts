import {
  createTheme,
} from '@mui/material/styles';

// Themes for customising MUI components
const fieldTheme = createTheme({
  palette: {
    primary: {
      main: '#cfb53b',
    },
  },
  typography: {
    allVariants: {
      color: 'white'
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#fff',
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ecd540"
          },
        },
        notchedOutline: {
          borderColor: '#cfb53b',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          backgroundColor: '#18323c',
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#cfb53b',
        },
      },
    },
  }
});

const imageCardTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'none',
        },
      },
    },
  }
});


export { fieldTheme, imageCardTheme };
