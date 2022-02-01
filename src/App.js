// @mui material components
import {
  ThemeProvider,
  responsiveFontSizes,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Custom Component Imports
import Header from "components/Header/Header";
import Send from "pages/Send/Send";

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Send />
    </ThemeProvider>
  );
}

export default App;
