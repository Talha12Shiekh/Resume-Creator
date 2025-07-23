import Navbar from "../Components/Navbar";
import Home from "../Screens/Home";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router";
import Templates from "../Screens/Templates";
import SignUp from "../Screens/SignUp";
import SignIn from "../Screens/SignIn";
import Dashboard from "../Screens/Dashboard";
import 'react-toastify/dist/ReactToastify.css';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer toastStyle={{ fontFamily: "poppins" }} />
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
