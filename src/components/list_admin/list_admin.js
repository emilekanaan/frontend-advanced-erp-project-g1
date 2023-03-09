import React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

import "./list_admin.css";
import FormAdmin from "../form_admin/form_admin";

function ListAdmin() {
  const { data } = useDemoData({
    dataSet: "Employee", // Change the data set to "Employee"
    rowLength: 100,
    maxColumns: 6,
  });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "picture", headerName: "Picture", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 85,
      renderCell: () => (
        <Button
          name="edit admin"
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
      width: 85,
      renderCell: () => (
        <Button
          name="edit admin"
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
    <div className="admin-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Admin</h1>
        <FormAdmin />
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
export default ListAdmin;
