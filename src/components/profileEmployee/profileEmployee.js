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
import "./profile.css";
import cookie from "react-cookies";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";
import ProfileChart from "./profileChart/profileChart";
import { Add } from "@mui/icons-material";
import AddRole from "./AddRole";
import AddKpi from "./AddKpi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EmployeeProfile(props) {
  const [evaluation, setEvaluation] = useState([]);
  const [employeeProfile, setEmployeeProfile] = useState([]);
  const [team, setTeam] = useState([]);
  const [projectRole, setProjectRole] = useState([]);

  const columns = [
    {
      field: "project",
      headerName: "Project",
      width: 200,
      valueGetter: (params) => {
        return params.row.project.name;
      },
    },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      valueGetter: (params) => {
        return params.row.role.role;
      },
    },
  ];

  const columns2 = [
    {
      field: "kpi",
      headerName: "KPI",
      width: 200,
      valueGetter: (params) => {
        return params.row.kpi.name;
      },
    },
    {
      field: "evaluation",
      headerName: "Evaluation",
      width: 150,
      valueGetter: (params) => {
        return params.row.evaluation;
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      valueGetter: (params) => {
        return params.row.date;
      },
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    let token = cookie.load("access_token");

    axios
      .get(`${process.env.REACT_APP_URL}/employee/${props.Id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setEmployeeProfile(response.data.message[0]);

          setTeam(response.data.message[0].team);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_URL}/evaluation/${props.Id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setEvaluation(response.data.message);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.REACT_APP_URL}/employee-project-role/${props.Id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setProjectRole(response.data.message);
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

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbar></GridToolbar>
      <AddRole teamName={props.team} employeeId={employeeProfile.id}/>
  
      </GridToolbarContainer>
    );
  }
  function CustomToolbar2() {
    return (
      <GridToolbarContainer>
        <GridToolbar></GridToolbar>
      <AddKpi teamName={props.team} employeeId={employeeProfile.id}/>
  
      </GridToolbarContainer>
    );
  }
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
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="div">
                Employee Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <List
            sx={{ backgroundColor: "#2F4550", width: "100%", height: "100%" }}
          >
            <section
              style={{
                display: "flex",
                marginTop: "5pc",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "600px",
                }}
              >
                <img
                  src={`http://localhost:8000/storage/${employeeProfile.picture}`}
                  alt=""
                  width={300}
                  height={300}
                  className="profileImage"
                />

                <section style={{ color: "white", fontSize: "1.3pc" }}>
                  <h1>
                    Name : {employeeProfile.first_name}{" "}
                    {employeeProfile.last_name}
                  </h1>
                  <h1>Phone: {employeeProfile.phone_num}</h1>
                  <h1>Email: {employeeProfile.email}</h1>
                  <h1>Team: {team.name}</h1>
                </section>
              </section>

              <ProfileChart />
            </section>
            <section className="employee-profile-bottom-section">
              <DataGrid
                rows={projectRole}
                getRowHeight={() => 70}
                columns={columns.filter((column) => column.field !== "id")}
                components={{
                  Toolbar: CustomToolbar,
                
                }}
                sx={{
                  maxWidth: "600px",
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

              <DataGrid
                rows={evaluation}
                getRowHeight={() => 70}
                columns={columns2.filter((column) => column.field !== "id")}
                components={{
                  Toolbar: CustomToolbar2,
                
                }}
                sx={{
                  maxWidth: "600px",
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
            </section>
          </List>
        </Dialog>
      </ThemeProvider>
    </>
  );
}

export default EmployeeProfile;
