import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import RoleForm from "../Role-form/role-form";
import "./role-list.css";
import EditRole from "../edit_Form/EditRole";
import DeleteTeam from "../delete_team/delete_team";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";

function RoleList() {
  const [RoleTable, setRoleTable] = useState([]);
  useEffect(() => {
    let token = cookie.load("access_token");

    axios
      .get(`${process.env.REACT_APP_URL}/role`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setRoleTable(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddAdmin = (newAdmin) => {
    setRoleTable((prevAdminTable) => [...prevAdminTable, newAdmin]);
  };

  const handleDeleteRole = (adminId) => {
    setRoleTable((prevAdminTable) =>
      prevAdminTable.filter((admin) => admin.id !== adminId)
    );
  };

  const handleEditAdmin = (editedAdmin) => {
    setRoleTable((prevAdminTable) =>
      prevAdminTable.map((admin) =>
        admin.id === editedAdmin.id ? editedAdmin : admin
      )
    );
  };
  const columns = [
    { field: "role", headerName: "Role", width: 260 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "updated_at", headerName: "updated", width: 180 },
    {
      field: "edit",
      headerName: "Edit",
      width: 170,
      renderCell: (params) => (
        <EditRole Id={params.row.id} onEditAdmin={handleEditAdmin} />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 84,
      renderCell: (params) => (
        <DeleteTeam
          text="role"
          Id={params.row.id}
          url="role"
          onDeleteAdmin={handleDeleteRole}
        />
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
          flexWrap: "wrap",
        }}
      >
        <h1 className="role-h1">Role</h1>
        <RoleForm onAddAdmin={handleAddAdmin} />
      </section>
      <DataGrid
        rows={RoleTable}
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

export default RoleList;
