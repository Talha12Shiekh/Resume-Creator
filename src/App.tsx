import Navbar from "../Components/Navbar";
import Home from "../Screens/Home";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router";
import Templates from "../Screens/Templates";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
