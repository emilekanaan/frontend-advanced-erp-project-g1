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
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function EmployeeRole(props) {
  const [EmployeeTable, setEmployeeTable] = useState([]);

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
          setEmployeeTable(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
     

    setOpen(true);
  };

  const columns = [
    {
      field: "Employee Name",
      headerName: "First Name",
      width: 150,
      valueGetter: (params) => {
        return params.row.first_name;

      },
    },
    { field: "Role", headerName: "Role", width: 150,  valueGetter: (params) => {}}
  ]
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
                Projects
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
              <h1>Team Name:</h1>
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={EmployeeTable}
                  getRowHeight={() => 70}
                  columns={columns}
                  columnBuffer={2}
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  sx={{
                    marginTop: "25px",
                    boxShadow: "1px 2px 3px 3px rgba(0,0,0,0.63)",
                    border: "1px solid #16202A ",
                    color: "#f4f4f9",
                    fontSize: "20px",
                    "& .MuiDataGrid-cell": {
                      backgroundColor: "#2f4550",
                      color: "#F4F4F9",
                    },
                  }}
                />
              </div>
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EmployeeRole;
