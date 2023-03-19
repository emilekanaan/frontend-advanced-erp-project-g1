import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { List, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Edit from "@mui/icons-material/Edit";
import axios from "axios";

import cookie from "react-cookies";
import { toast } from "react-toastify";

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

function EditAdmin(props, onEditAdmin) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log(props);
    e.preventDefault();
    console.log(selectedFile);
    const formData = new FormData();
    if (selectedFile) formData.append("picture", selectedFile);
    if (name) formData.append("name", name);
    if (email) formData.append("email", email);
    if (password) formData.append("password", password);
    formData.append("_method", "PATCH");
    console.log(selectedFile);
    let token = cookie.load("access_token");

    axios
      .post(`${process.env.REACT_APP_URL}/admin/${props.Id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data.admin);
        props.onEditAdmin(response.data.admin);
        return toast(" Edited admin!", {
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
          variant="contained"
          sx={{
            backgroundColor: "transparent",
            padding: "0.5pc",
            color: "#f4f4f9",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        >
          <Edit />
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <form action="POST" onSubmit={handleSubmit}>
            <AppBar sx={{ position: "relative", width: "600px" }}>
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
                  Edit Admin
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
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
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
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="secondary"
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
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ width: "90%", margin: "1pc" }}
                >
                  Admin image
                  <input
                    hidden
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />
                </Button>
              </Stack>
            </List>
          </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EditAdmin;
