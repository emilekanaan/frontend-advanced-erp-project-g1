import React from "react";
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
import { Edit } from "@mui/icons-material";
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

function EditKpi(props) {
  const [name, setName] = useState("");
  const [dataFromkpi, setDataFromKpi] = useState("");
  const [error, setError] = useState("");
  const test = () => {
    console.log("clicked!!!");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleChildData(data) {
    console.log(data);
    setDataFromKpi(data);
  }
  const handleSubmit = (e) => {
    console.log(props);
    e.preventDefault();
    const formData=new FormData();
    if (name) formData.append("name", name);
    formData.append("_method", "PATCH");
    console.log(name);
    let token = cookie.load("access_token");

    axios
      .post(`${process.env.REACT_APP_URL}/kpi/${props.Id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        return toast(" KPI edited successfully", {
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
        console.log(error)
        setError("Invalid credentials");
        toast.error(error, {
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
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          name="Add team"
          color="accent"
          variant="contained"
          sx={{
            padding: "0.5pc",
            backgroundColor: "transparent",
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
        <form action="POST" onSubmit={handleSubmit} >

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
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add New KPI
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose} type="submit">
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List sx={{ backgroundColor: "#2F4550" }}>
            <TextField
              id="outlined-basic"
              label="Name"
              onChange={(e)=>setName(e.target.value)}
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
            />
            {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
          </List>
        </form>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EditKpi;
