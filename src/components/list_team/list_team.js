import React from "react";
import FormTeam from "../form_team/form_team";
import "./list_team.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDemoData } from "@mui/x-data-grid-generator";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import DeleteTeam from "../delete_team/delete_team";
import EditTeam from "../edit_Form/EditTeam";

function ListTeam() {
  const { data } = useDemoData({
    dataSet: "Employee", // Change the data set to "Employee"
    rowLength: 100,
    maxColumns: 5,
  });

  const columns = [
   
    { field: "Name", headerName: "Name", width: 270 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "update_at", headerName: "updated", width: 180 },
    {
      field: "showTeam",
      headerName: "Show Team",
      width: 150,
      renderCell: () => (
        <Button
          name="show team"
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
          {<ContactPageOutlinedIcon />}
        </Button>
      ),
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => <EditTeam />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => <DeleteTeam />,
    },
  ];

  return (
    <div className="team-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Team</h1>
        <FormTeam />
      </section>
      <DataGrid
        rows={data.rows}
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
  );
}

export default ListTeam;
