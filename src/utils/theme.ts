import { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: `#ffffff`,
    },
    secondary: {
      main: `#3148ba`,
      light: "#5493f71a",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    allVariants: {
      color: "#3148ba",
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: `#cccccc`,
        },
      },
    },
  },
};
