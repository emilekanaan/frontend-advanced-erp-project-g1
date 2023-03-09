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

function ListTeam() {
    const { data } = useDemoData({
        dataSet: "Employee", // Change the data set to "Employee"
        rowLength: 100,
        maxColumns: 5,
    });

    const columns = [
        { field: "id", headerName: "ID", width: 350 },
        { field: "Name", headerName: "Name", width: 350 },
        {
            field: "showTeam",
            headerName: "Show Team",
            width: 120,
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
                >{<ContactPageOutlinedIcon />}</Button>
            ),
        },
        {
            field: "edit",
            headerName: "Edit",
            width: 84,
            renderCell: () => (
                <Button
                    name="edit team"
                    variant="contained"
                    sx={{
                        padding: "0.5pc",
                        backgroundColor: "transparent",
                        "&:hover": {
                            backgroundColor: "#4dedf5",
                            color: "#16202a",
                        },
                    }}
                >{<Edit />}</Button>
            ),
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 84,
            renderCell: () => (
                <DeleteTeam />
            ),
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

export default ListTeam;
