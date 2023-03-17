import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_kpi.css";
import { createTheme } from "@mui/material/styles";
import FormKpi from "../form_kpi/form_kpi";
import DeleteTeam from "../delete_team/delete_team";
import EditKpi from "../edit_Form/EditKpi";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from "react-cookies";

function ListKpi() {
  const[KpiTable, setKpiTable] =useState([]);
  useEffect(() => {
    let token = cookie.load("access_token");

    axios
    .get(`${process.env.REACT_APP_URL}/kpi`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      if(response.status===200) {
        console.log(response)
        setKpiTable(response.data.message.data);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "created_at", headerName: "created", width: 180 },
    { field: "update_at", headerName: "updated", width: 180 },
    {
      field: "edit",
      headerName: "Edit",
      width: 200,
      renderCell: (params) => <EditKpi Id={params.row.id}/>,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 200,
      renderCell: (params) => <DeleteTeam text="Kpi" Id={params.row.id} url="kpi"/>,
    },
  ];

  return (
    <div className="Kpi-table">
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <h1 style={{ color: "#f4f4f9", fontSize: "40px" }}>KPI</h1>
        <FormKpi />
      </section>
      <DataGrid
        rows={KpiTable}
        getRowHeight={() => 70}
        columns={columns} // Pass the columns array as a prop
        slots={{
          toolbar: GridToolbar,
        }}
        sx={{
          marginTop: "30px",
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

export default ListKpi;
