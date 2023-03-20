import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import cookie from "react-cookies";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  palette: {
    primary: { main: "#16202a" },
    secondary: { main: "#f4f4f9" },
    activeItem: { main: "#4dedf570" },
    accent: { main: "#4dedf5" },
  },
});

function FormTeam({ onAddAdmin }) {
  const [team, setTeam] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", team);
    console.log(team);
    let token = cookie.load("access_token");

    axios
      .post(`${process.env.REACT_APP_URL}/team`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        onAddAdmin(response.data.message);
        console.log(response);
        return toast(" added admin!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { backgroundColor: "#4dedf5", color: "#16202a" },
        });
      })
      .catch((error) => {
        toast.error("invalid credentials", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          name="Add team"
          color="accent"
          startIcon={<AddIcon />}
          variant="contained"
          sx={{
            margin: "3pc 0",
          }}
        >
          Add Team
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <form action="POST" onSubmit={handleSubmit}>
            <AppBar sx={{ position: "relative", width: "500px" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  Add New Team
                </Typography>
                <Button
                  autoFocus
                  color="inherit"
                  onClick={handleClose}
                  type="submit"
                >
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List sx={{ backgroundColor: "#2F4550" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                color="secondary"
                variant="outlined"
                onChange={(e) => setTeam(e.target.value)}
                sx={{
                  width: "90%",
                  margin: "1pc",
                  "& .MuiOutlinedInput-root": {
                    color: "white", // sets the text color to white
                    "& fieldset": {
                      borderColor: "white", // sets the border color to white
                    },
                  },
                }}
              />
              {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
            </List>
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default FormTeam;
