import React from "react";
import logo from "./logo.svg";
import { Home } from "./components/pages/home/home";
import { Vehicule } from "./components/pages/Vehicule/Vehicule";
import { Login } from "./components/pages/Login/Login";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createMuiTheme,
  createTheme,
} from "@mui/material/styles";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const theme = createTheme({
    typography: {
      // fontFamily: "monospace",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Vehicule" element={<Vehicule />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
