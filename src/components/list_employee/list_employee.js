import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_employee.css";

export default function ListEmployee() {
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
    { field: "showprofile", headerName: "Show profile", width: 150 },
    { field: "edit", headerName: "Edit", width: 150 },
    { field: "delete", headerName: "Delete", width: 150 },
  ];

  return (
    <>
      <div className="employee-table">
        <h1 style={{ color: "#f4f4f9", fontSize:"40px" }}>Employee</h1>
        <DataGrid
          rows={data.rows}
          columns={columns} // Pass the columns array as a prop
          slots={{
            toolbar: GridToolbar,
          }}
          sx={{
            marginTop: "50px",
            boxShadow: "1px 2px 3px 3px rgba(0,0,0,0.63)",
            border: "1px solid #16202A ",
           
            color: "#f4f4f9",

            fontSize: "20px",
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "#16202A",
              color: "#F4F4F9",
            },
            "& .MuiDataGrid-cell": {
              backgroundColor:"#2f4550",
              color: "#F4F4F9",
              
            },
          }}
        />
      </div>
    </>
  );
}
