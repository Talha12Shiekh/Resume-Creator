import Navbar from "../Components/Navbar";
// import TextsPortion from "../Components/TextsPortion";
import Home from "../Screens/Home";
// import TemplatesSection from "../Screens/Templates";
import { CssBaseline } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router";
import Templates from "../Screens/Templates";
import SignUp from "../Screens/SignUp";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
