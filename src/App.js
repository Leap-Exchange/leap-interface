import { useState } from "react";

// redux imports
import { useSelector } from "react-redux";

// @mui material components
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import themeObj from "assets/theme";

// Custom Component Imports
import Header from "components/Header/Header";
import Send from "pages/Send/Send";

function App() {
  const themeMode2 = useSelector((state) => state.theme.mode);
  const [themeMode, setThememMode] = useState("light");

  themeObj.palette = { ...themeObj.palette, mode: themeMode2 };
  const theme = createTheme(themeObj);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Send />
    </ThemeProvider>
  );
}

export default App;
