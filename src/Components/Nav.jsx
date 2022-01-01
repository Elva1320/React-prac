import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

//import makestyles in order to use the css
import { makeStyles } from "@material-ui/core/styles";

//use usestyles as a css provieder
const useStyles = makeStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: '#ecff5e"',
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
      color: "brown",
      transition: "transform 0.15s ease-in-out",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    padding: "0px 5px 0px 5px",
  },
}));

function Nav() {
  //varibale called classes for our css object name useStyles
  const classes = useStyles();
  return (
    //classes in material-ui use {} to be targeted
    <AppBar position="static" elevation={15} className={classes.profile}>
      <Toolbar className={classes.header}>
        <h6 className={classes.nav}>
          {/* using a button and Link from react-router to link the navagations */}
          <Button
            component={Link}
            to="/home"
            color="inherit"
            startIcon={<HomeOutlinedIcon />}
          >
            Home
          </Button>
        </h6>
        <h6 className={classes.nav}>
          {/* using a button and Link from react-router to link the navagations */}

          <Button
            component={Link}
            to="/contact"
            color="inherit"
            startIcon={<ContactMailOutlinedIcon />}
          >
            Contact
          </Button>
        </h6>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
