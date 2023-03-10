import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./list_employee.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmployeeProfile from "../profileEmployee";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteTeam from "../delete_team/delete_team";
import FormEmployee from "../form_employee/form_employee";
import EditEmployee from "../edit_Form/EditEmployee";

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
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone_num", headerName: "Phone", width: 150 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "update_at", headerName: "updated", width: 180 },
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
      width: 84,
      renderCell: () => <EditEmployee />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 84,
      renderCell: () => <DeleteTeam text="employee" />,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="employee-table">
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Employee</h1>

          <FormEmployee />
        </section>
        <DataGrid
          rows={EmployeeTable}
          getRowHeight={() => 70}
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
