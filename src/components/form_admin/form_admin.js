import React, {useState} from "react";
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
import {  TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Alert } from "@mui/material";
import cookie from "react-cookies";
import axios from "axios";



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

function FormAdmin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [dataFromadmin, setDataFromadmin] = useState("");
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let token = cookie.load("access_token");
    console.log(selectedFile);
    const formData = new FormData();
    formData.append("picture", selectedFile);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    console.log(selectedFile);

    axios
      .post(`${process.env.REACT_APP_URL}/admin`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => { })
      .catch((error) => {
        setError("Invalid credentials");
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
            margin: "2pc 0",
          }}
        >
          Add Admin
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative", width: "560px" }}>
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
                Add New Admin
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List sx={{ backgroundColor: "#2F4550" }}>
            <section style={{ marginLeft: "30px" }}>
            {error && <Alert severity="error">{error}</Alert>}

              <TextField
                id="outlined-basic"
                label="Name"
                color="secondary"
                variant="outlined"
                sx={{
                  width: "90%",
                  margin: "1pc",
                  '& .MuiOutlinedInput-root': {
                    color: "white", // sets the text color to white
                    '& fieldset': {
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
                  '& .MuiOutlinedInput-root': {
                    color: "white", // sets the text color to white
                    '& fieldset': {
                      borderColor: "white", // sets the border color to white
                    },
                  },
                }}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
               <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                sx={{
                  width: "90%",
                  margin: "1pc",
                  '& .MuiOutlinedInput-root': {
                    color: "white", // sets the text color to white
                    '& fieldset': {
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
                  <input accept=".png, .jpg, .jpeg"
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}/>
                </Button>
              </Stack>
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default FormAdmin;
