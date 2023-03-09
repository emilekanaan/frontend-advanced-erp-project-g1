import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_project.css";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import FormProject from "../form_project/form_project.js";

function ListProject() {
  const { data } = useDemoData({
    dataSet: "Employee", // Change the data set to "Employee"
    rowLength: 100,
    maxColumns: 6,
  });

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 350 },
    { field: "team", headerName: "Team", width: 150 },
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
    <div className="project-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Project</h1>
        <FormProject />
      </section>
      <DataGrid
        rows={data.rows}
        columns={columns} // Pass the columns array as a prop
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          marginTop: "15px",
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
  );
}

export default ListProject;
