import React from "react";
//importing switch and route for components url /home /contacts
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Nav from "./Nav";


import { createTheme, ThemeProvider } from "@material-ui/core";

//creating the theme desire for the whole application
const theme = createTheme({
  palette: {
    primary: {
      //main color
      main: "#ecff5e",
    },
    secondary: {
      main: "#171810",
    },
    warning: {
      main: "#C1C5D2",
    },
    type: "dark",
  },
  typography: {
    fontFamily: "Garamond",
    h5: {
      color: "#ffdd00",
    },
  },
  spacing: 8,
});

function Main() {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default Main;
