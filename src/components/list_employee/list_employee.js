import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_employee.css";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function ListEmployee() {
  const theme = createTheme({
    palette: {
      primary: { main: "#16202a" },
      secondary: { main: "#f4f4f9" },
      activeItem: { main: "#4dedf570" },
      accent: { main: "#4dedf5" },
    },
  });

  const { data } = useDemoData({
    dataSet: "Employee", // Change the data set to "Employee"
    rowLength: 100,
    maxColumns: 6,
  });

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "team", headerName: "Team", width: 150 },
    {
      field: "showprofile",
      headerName: "Show profile",
      width: 150,
      renderCell: () => (
        <Button
          name="edit project"
          startIcon={<ContactPageOutlinedIcon />}
          variant="contained"
          sx={{
            padding: "10 50px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        ></Button>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => (
        <Button
          name="edit project"
          startIcon={<Edit />}
          variant="contained"
          sx={{
            padding: "10 50px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        ></Button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => (
        <Button
          name="edit project"
          startIcon={<Delete />}
          variant="contained"
          sx={{
            padding: "10 50px",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#4dedf5",
              color: "#16202a",
            },
          }}
        ></Button>
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
          rows={data.rows}
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
