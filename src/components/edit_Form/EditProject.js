import React from "react";
import AddIcon from "@mui/icons-material/Add";
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
import { TextField } from "@mui/material";
import MultipleSelectPlaceholder from "../DropDown";
import { useState } from "react";
import axios from "axios";
import { Edit } from "@mui/icons-material";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProject(props) {
    const [name,setName]=useState("");
    const [teamid,setTeamid]=useState("");
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

  const theme = createTheme({
    palette: {
      primary: { main: "#16202a" },
      secondary: { main: "#f4f4f9" },
      activeItem: { main: "#4dedf570" },
      accent: { main: "#4dedf5" },
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(name) formData.append("name", name);
    if(teamid) formData.append("team_id", teamid);
    formData.append("_method","PATCH");
    axios
      .post(`${process.env.REACT_APP_URL}/project/${props.Id}`, formData)
      .then((response) => {
        console.log(response)
        return toast(" employee edited successfully", {
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
        console.log(error);
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
  };
  function handleChildData(data) {
    console.log(data); 
    setTeamid(data)
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
                  Add New Project
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
                onChange={(e) => setName(e.target.value)}
              />
              <MultipleSelectPlaceholder onChildData={handleChildData}/>
              {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
            </List>
            </form>
          </Dialog>
    
      </ThemeProvider>
    </>
  );
}

export default EditProject;
