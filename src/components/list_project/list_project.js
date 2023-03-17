import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_project.css";
import FormProject from "../form_project/form_project.js";
import DeleteTeam from "../delete_team/delete_team";
import EditProject from "../edit_Form/EditProject";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";
import EmployeeRole from "../employeeRole/employeeRole";

function ListProject() {
  const [projectTable, setProjectTable] = useState([]);

  useEffect(() => {
    let token = cookie.load("access_token");
    axios
      .get(`${process.env.REACT_APP_URL}/project`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setProjectTable(response.data.data);
          console.log(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: "id" },
    { field: "name", headerName: "Name", width: 350 },
    {
      field: "team",
      headerName: "Team",
      width: 200,
      valueGetter: (params) => {
        return params.row.team.name;
      },
    },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "updated_at", headerName: "updated", width: 180 },
    {
      field: "Employees",
      headerName: "Employees",
      width: 150,
      renderCell: (params) => {
        return <EmployeeRole Id={params.row.id} teamId={params.row.team_id}/>;
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => <EditProject Id={params.row.id} />,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 84,
      renderCell: (params) => (
        <DeleteTeam text="project" Id={params.row.id} url="project" />
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
          flexWrap:"wrap"
        }}
      >
        <h1 className="project-h1">Project</h1>
        <FormProject />
      </section>
      <DataGrid
        rows={projectTable}
        getRowHeight={() => 70}
        columns={columns.filter((column) => column.field !== "id")}
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
