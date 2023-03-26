import { createTheme, ThemeProvider } from "@mui/material";
import { colors } from "./colors";
import IntroWithSignUpFormComponent from "./Components/IntroWithSignUpForm/IntroWithSignUpFormComponent";
import "./styles.css";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    h1: {
      fontSize: 40,
      fontWeight: 700,
    },
    fontFamily: "Poppins",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-root": {
            fontWeight: 400,
          },
          ".MuiInputBase-input": {
            padding: "0.8rem 2rem",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <IntroWithSignUpFormComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
