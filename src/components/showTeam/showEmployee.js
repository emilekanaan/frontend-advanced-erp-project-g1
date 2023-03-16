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
import { useState } from "react";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function ShowEmployee(props) {
  const [team, setTeam] = useState([]);
  const [employee,setEmployee]=useState([])
  const test = () => {
    console.log("clicked!!!");
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log(props);
    axios
      .get(`${process.env.REACT_APP_URL}/employeeteam/${props.Id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.message);
          setEmployee(response.data.message)
      
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
                {team.name} projects
              </Typography>
            </Toolbar>
          </AppBar>
          <List
            sx={{
              backgroundColor: "#2F4550",
              padding: "100",
              color: "#f4f4f9",
            }}
          >
            <section>
         
              {
                employee.map(pro=>{
                  return (
                   <h3 className="projectemployeeData"> {pro.first_name} {pro.last_name}</h3>
                  )
                })
              }
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default ShowEmployee;
