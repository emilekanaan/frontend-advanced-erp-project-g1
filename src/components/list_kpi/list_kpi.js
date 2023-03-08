import React from 'react';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import "./list_kpi.css";

function ListKpi() {
    const { data } = useDemoData({
        dataSet: "Employee", // Change the data set to "Employee"
        rowLength: 100,
        maxColumns: 6,
      });
    
      const columns = [
        { field: "id", headerName: "ID", width: 300 },
        { field: "Name", headerName: "Name", width: 200 },
        { field: "edit", headerName: "Edit", width: 200 },
        { field: "delete", headerName: "Delete", width: 200 },
      ];
    
      return (
        <>
          <div className="Kpi-table">
            <h1 style={{ color: "#f4f4f9", fontSize:"40px" }}>KPI</h1>
            <DataGrid
              rows={data.rows}
              columns={columns} // Pass the columns array as a prop
              slots={{
                toolbar: GridToolbar,
              }}
              sx={{
                marginTop: "50px",
                boxShadow: "1px 2px 3px 3px rgba(0,0,0,0.63)",
                border: "1px solid #16202A ",
               
                color: "#f4f4f9",
    
                fontSize: "20px",
                "& .MuiDataGrid-cell:hover": {
                  backgroundColor: "#16202A",
                  color: "#F4F4F9",
                },
                "& .MuiDataGrid-cell": {
                  backgroundColor:"#2f4550",
                  color: "#F4F4F9",
                  
                },
              }}
            />
          </div>
        </>
      )
}

export default ListKpi