import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#006064",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        style: {
          minWidth: 275,
          backgroundColor: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(40)px",
          boxShadow: "10px 10px 10px rgba(30,30,30,.1)",
          borderRadius: 10,
          marginBottom: "1rem",
        },
      },
    },
  },
});

export default theme;