import React from "react";
import FormTeam from "../form_team/form_team";
import "./list_team.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteTeam from "../delete_team/delete_team";
import EditTeam from "../edit_Form/EditTeam";
import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "react-cookies";
import ShowTeam from "../showTeam/showTeam";
import ShowEmployee from "../showTeam/showEmployee";

function ListTeam() {
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllTeams();
  }, []);

  const getAllTeams = () => {
    let token = cookie.load("access_token");
    axios
      .get(`${process.env.REACT_APP_URL}/team`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data.data)
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const columns = [
    { field: "id" },
    { field: "name", headerName: "Name", width: 270 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "updated_at", headerName: "updated", width: 180 },
    {
      field: "Projects",
      headerName: "Projects",
      width: 150,
      renderCell: (params) => {
        return <ShowTeam Id={params.row.id} />;
      },
    },
    {
      field: "Employees",
      headerName: "Employees",
      width: 150,
      renderCell: (params) => {
        return <ShowEmployee Id={params.row.id} />;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => <EditTeam Id={params.row.id} />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => <DeleteTeam text="team" Id={params.row.id} url="team"/>,
    },
  ];

  return (
    <div className="team-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
          flexWrap:"wrap",
        }}
      >
        <h1 className="team-h1">Team</h1>
        <FormTeam />
      </section>
      <DataGrid
        rows={tableData}
        getRowHeight={() => 70}
        columns={columns.filter((column) => column.field !== "id")} // Pass the columns array as a prop
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
