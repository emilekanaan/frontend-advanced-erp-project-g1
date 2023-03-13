import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import profile from "./profile.jpeg";
import "./profile.css";
import { motion } from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EmployeeProfile(props) {
  const [evaluation, setEvaluation] = useState([]);
  const [role, setRole] = useState([]);
  const [employeeProfile, setEmployeeProfile] = useState({});
  const [team, setTeam] = useState([]);

  const test = () => {
    console.log("clicked!!!");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(props);
    axios
      .get(`${process.env.REACT_APP_URL}/employee/${props.Id}`)
      .then((response) => {
        if (response.status === 200) {
          setEmployeeProfile(response.data.message[0]);
          setTeam(response.data.message[0].team);
          console.log(response.data.message[0].team);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_URL}/evaluation/${props.Id}`)
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`${process.env.REACT_APP_URL}/employee-project-role/${props.Id}`)
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme({
    palette: {
      primary: { main: "#16202a" },
      secondary: { main: "#f4f4f9" },
      activeItem: { main: "#4dedf570" },
      accent: { main: "#4dedf5" },
    },
  });
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          name="Add team"
          variant="contained"
          sx={{
            margin: "1.2pc",
            padding: "0.5pc 1pc",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        >
          <ContactPageOutlinedIcon />
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Employee Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <List
            sx={{ backgroundColor: "#2F4550", width: "100%", height: "100%" }}
          >
            <section
              style={{ display: "flex", marginTop: "70px", marginLeft: "7%" }}
            >
              <img
                src={profile}
                alt=""
                width={300}
                height={350}
                className="profileImage"
              />
              <section
                style={{ marginLeft: "50px", color: "white", marginTop: "5%" }}
              >
                <h1>
                  Name : {employeeProfile.first_name}{" "}
                  {employeeProfile.last_name}
                </h1>
                <h1>Phone: {employeeProfile.phone_num}</h1>
                <h1>Email :{employeeProfile.email}</h1>
                <h1>Team :{team.name}</h1>
              </section>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{ marginTop: "50px" }}
              />
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EmployeeProfile;
