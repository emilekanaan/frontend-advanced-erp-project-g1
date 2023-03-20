import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./list_employee.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmployeeProfile from "../profileEmployee/profileEmployee";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteTeam from "../delete_team/delete_team";
import FormEmployee from "../form_employee/form_employee";
import EditEmployee from "../edit_Form/EditEmployee";
import cookie from "react-cookies";

export default function ListEmployee() {
  const [EmployeeTable, setEmployeeTable] = useState([]);
  useEffect(() => {
    let token = cookie.load("access_token");
    axios
      .get(`${process.env.REACT_APP_URL}/employee`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setEmployeeTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleAddAdmin = (newAdmin) => {
    setEmployeeTable((prevAdminTable) => [...prevAdminTable, newAdmin]);
  };

  const handleDeleteEmployee = (adminId) => {
    setEmployeeTable((prevAdminTable) =>
      prevAdminTable.filter((admin) => admin.id !== adminId)
    );
  };

  const handleEditAdmin = (editedAdmin) => {
    setEmployeeTable((prevAdminTable) =>
      prevAdminTable.map((admin) =>
        admin.id === editedAdmin.id ? editedAdmin : admin
      )
    );
  };
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
    { field: "updated_at", headerName: "updated", width: 180 },
    {
      field: "name",
      headerName: "Team",
      width: 150,
      valueGetter: (params) => {
        if (params.row.team && params.row.team.name) {
          return params.row.team.name;
        }
        return "No team yet";
      },
    },
    {
      field: "showprofile",
      headerName: "Show profile",
      width: 150,
      renderCell: (params) => {
        return <EmployeeProfile Id={params.row.id} team={params.row.team_id} />;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 84,

      renderCell: (params) => (
        <EditEmployee Id={params.row.id} onEditAdmin={handleEditAdmin} />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 84,

      renderCell: (params) => (
        <DeleteTeam
          text="employee"
          Id={params.row.id}
          url="employee"
          onDeleteAdmin={handleDeleteEmployee}
        />
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="employee-table">
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <h1 className="employee-h1">Employee</h1>

          <FormEmployee onAddAdmin={handleAddAdmin} />
        </section>
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
    </ThemeProvider>
  );
}
