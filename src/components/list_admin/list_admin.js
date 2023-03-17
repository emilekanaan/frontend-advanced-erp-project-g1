import { React, useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_admin.css";
import FormAdmin from "../form_admin/form_admin";
import DeleteTeam from "../delete_team/delete_team";
import EditAdmin from "../edit_Form/EditAdmin";
import axios from "axios";
import cookie from "react-cookies";


function ListAdmin() {
  const [AdminTable, setAdminTable] = useState([]);

  useEffect(() => {
    let token = cookie.load("access_token");
    axios
      .get(`${process.env.REACT_APP_URL}/admin`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setAdminTable(response.data.data);
          // console.log(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: "id" },
    { field: "picture", headerName: "Picture", width: 150 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "update_at", headerName: "updated", width: 180 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return <EditAdmin Id={params.row.id} />;
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <DeleteTeam text="Admin" Id={params.row.id} url="admin" />
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
        rows={AdminTable}
        getRowHeight={() => 70} // set the row height to 50px
        columns={columns.filter((column) => column.field !== "id")} // Pass the columns array as a prop
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          marginTop: "15px",
          boxShadow: "1px 2px 3px 3px rgba(0,0,0,0.63)",
          border: "1px solid #16202A ",

          color: "#f4f4f9",

          "& .MuiDataGrid-cell": {
            backgroundColor: "#2f4550",
            color: "#F4F4F9",
          },
          "& .MuiDataGrid-columnHeaderTitleIcon": {
            color: "#F4F4F9", // sets the color of the sort 3-point icon to white
          },
          "& .MuiDataGrid-filterIcon": {
            color: "#F4F4F9", // sets the color of the filter/flesh icon to white
          },
        }}
      />
    </div>
  );
}
export default ListAdmin;
