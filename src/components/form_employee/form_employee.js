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

import Stack from "@mui/material/Stack";
import MultipleSelectPlaceholder from "../DropDown";

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

function FormEmployee() {
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
          name="Add team"
          color="accent"
          startIcon={<AddIcon />}
          variant="contained"
          sx={{
            margin: "2pc 0",
          }}
        >
          Add Employee
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
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
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add New Employee
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List sx={{ backgroundColor:"#2F4550"}}>
            <section style={{marginLeft:'19px'}}>
            <TextField
              id="outlined-basic"
              label="First Name"
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
            <TextField
              id="outlined-basic"
              label="Last Name"
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
            <TextField
              id="outlined-basic"
              label="Email"
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
            <TextField
              id="outlined-basic"
              label="phone"
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
            <MultipleSelectPlaceholder />
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                variant="contained"
                component="label"
                sx={{ width: "90%", margin: "1pc" }}
              >
                Employee image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack>
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default FormEmployee;
