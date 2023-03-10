import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_project.css";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import FormProject from "../form_project/form_project.js";
import DeleteTeam from "../delete_team/delete_team";
import EditProject from "../edit_Form/EditProject";

function ListProject() {
  const { data } = useDemoData({
    dataSet: "Employee", // Change the data set to "Employee"
    rowLength: 100,
    maxColumns: 6,
  });

  const columns = [
    { field: "name", headerName: "Name", width: 350 },
    { field: "team", headerName: "Team", width: 200 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "update_at", headerName: "updated", width: 180 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => <EditProject />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 84,
      renderCell: () => <DeleteTeam text="employee" />,
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
        getRowHeight={() => 70} 
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
