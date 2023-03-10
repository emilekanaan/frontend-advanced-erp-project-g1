import React from "react";
import EditIcon from "@mui/icons-material/Edit";
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
import {  TextField } from "@mui/material";

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

function EditTeam() {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleClickOpen}
          name="edit team"
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
          <EditIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
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
                Edit Team
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List sx={{backgroundColor:'#2F4550'}}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              sx={{
                width: "90%",
                margin: "1pc",
                '& .MuiOutlinedInput-root': {
                    color: "white", // sets the text color to white
                    '& fieldset': {
                      borderColor: "white", // sets the border color to white
                    }}
              }}
            />
            {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EditTeam;
