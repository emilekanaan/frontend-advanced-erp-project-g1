import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_employee.css";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmployeeProfile from "../profileEmployee";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListEmployee() {
  const [EmployeeTable, setEmployeeTable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/employee")
      .then((response) => {
        if (response.status === 200) {
          setEmployeeTable(response.data.data);

          console.log(response.data.data[1].team.name);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const theme = createTheme({
    palette: {
      primary: { main: "#16202a" },
      secondary: { main: "#f4f4f9" },
      activeItem: { main: "#4dedf570" },
      accent: { main: "#4dedf5" },
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "first_name", headerName: "First Name", width: 200 },
    { field: "last_name", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone_num", headerName: "Phone", width: 150 },

    {
      field: "name",
      headerName: "Team",
      width: 150,
      valueGetter: (params) => params.row.team.name,
    },
    {
      field: "showprofile",
      headerName: "Show profile",
      width: 150,
      renderCell: () => <EmployeeProfile />,
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => (
        <Button
          name="edit project"
          variant="contained"
          sx={{
            padding: "50px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        >
          {" "}
          <Edit />
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => (
        <Button
          name="edit project"
          variant="contained"
          sx={{
            padding: "50px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        >
          {" "}
          <Delete />
        </Button>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="employee-table">
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Employee</h1>
          <Button
            Name="Add team"
            startIcon={<AddIcon />}
            color="accent"
            variant="contained"
            sx={{
              margin: "2pc",
            }}
          >
            Add Project
          </Button>
        </section>
        <DataGrid
          rows={EmployeeTable}
          columns={columns} // Pass the columns array as a prop
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            marginTop: "25px",
            boxShadow: "1px 2px 3px 3px rgba(0,0,0,0.63)",
            border: "1px solid #16202A ",

            color: "#f4f4f9",

            fontSize: "20px",
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "#16202A",
              color: "#F4F4F9",
            },
            "& .MuiDataGrid-cell": {
              backgroundColor: "#2f4550",
              color: "#F4F4F9",
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}
