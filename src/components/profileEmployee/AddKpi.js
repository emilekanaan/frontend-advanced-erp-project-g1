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
import SingleSelectPlaceholderKpi from "./DropDownKpi";
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

function AddKpi(props) {
  const [evaluation, setEvaluation] = useState("");
  const [date, setDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const [error, setError] = useState("");
  const [kpiId, setKpiId] = useState("");

  function handleChildData(data) {
    console.log(data);
    setKpiId(data);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setEmployeeId(props.employeeId);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kpi_id", kpiId);
    formData.append("employee_id", employeeId);
    formData.append("evaluation", evaluation);
    formData.append("date", date);
    let token = cookie.load("access_token");

    axios
      .post(`${process.env.REACT_APP_URL}/evaluation`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
        setError("Invalid credentials");
        console.log(error);
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
          sx={{ color: "#16202a" }}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <form action="POST" onSubmit={handleSumbit}>
            <AppBar sx={{ position: "relative", width: "550px" }}>
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
                  Add Kpi
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
              <SingleSelectPlaceholderKpi
                id={props.teamName}
                onChildData={handleChildData}
              />
              <TextField
                id="outlined-basic"
                label="evaluation"
                variant="outlined"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value >= 1 && value <= 10) {
                    setEvaluation(value);
                  }else{
                    alert("Please select a value")
                  }
                }}
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
              <TextField
                id="outlined-basic"
                label="date"
                variant="outlined"
                type="date"
                onChange={(e) => setDate(e.target.value)}
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

export default AddKpi;
