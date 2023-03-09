import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Button } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import RoleForm from '../Role-form/role-form';
import './role-list.css'
import EditRole from '../edit_Form/EditRole';
import DeleteTeam from '../delete_team/delete_team';
function RoleList() {
    const { data } = useDemoData({
        dataSet: "Employee", // Change the data set to "Employee"
        rowLength: 100,
        maxColumns: 6,
      });
    
      const columns = [
        { field: "id", headerName: "ID", width: 362 },
        { field: "name", headerName: "Name", width: 260 },        {
          field: "edit",
          headerName: "Edit",
          width: 170,
          renderCell: () => (
           <EditRole/>
          ),
        },
        {
          field: "delete",
          headerName: "Delete",
          width: 84,
          renderCell: () => (
              <DeleteTeam text="role"/>
          ),
      },
      ];
    return (
        <div className="role-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>Role</h1>
        <RoleForm/>
      
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

export default RoleList;