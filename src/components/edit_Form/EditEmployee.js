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
import axios from "axios";
import Stack from "@mui/material/Stack";
import MultipleSelectPlaceholder from "../DropDown";
import { useState } from "react";
import { Alert } from "@mui/material";
import { Edit } from "@mui/icons-material";
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

function EditEmployee(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone_num, setPhoneNum] = useState("");
  const [dataFromteam, setDataFromteam] = useState("");
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
    setDataFromteam(data);
  }
  const handleSubmit = (e) => {
    console.log(props);
    e.preventDefault();
    console.log(selectedFile);
    const formData = new FormData();
    if (selectedFile) formData.append("picture", selectedFile);
    if (firstname) formData.append("first_name", firstname);
    if (lastname) formData.append("last_name", lastname);
    if (email) formData.append("email", email);
    if (phone_num) formData.append("phone_num", phone_num);
    if (dataFromteam) formData.append("team_id", dataFromteam);
    formData.append("_method", "PATCH");
    console.log(selectedFile);

    axios
      .post(`${process.env.REACT_APP_URL}/employee/${props.Id}`, formData)
      .then((response) => {
        console.log(response);
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
        setError(error);
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
        <form>
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
                    Edit Employee
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
                <section style={{ marginLeft: "19px" }}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
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
                    name="first_name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
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
                    onChange={(e) => setLastname(e.target.value)}
                    name="last_name"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
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
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                  <TextField
                    id="outlined-basic"
                    label="phone"
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
                    onChange={(e) => setPhoneNum(e.target.value)}
                    name="phone_num"
                  />
                  <MultipleSelectPlaceholder onChildData={handleChildData} />
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{ width: "90%", margin: "1pc" }}
                    >
                      Employee image
                      <input
                        accept=".png, .jpg, .jpeg"
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                    </Button>
                  </Stack>
                </section>
              </List>
            </form>
          </Dialog>
        </form>
      </ThemeProvider>
    </>
  );
}

export default EditEmployee;
