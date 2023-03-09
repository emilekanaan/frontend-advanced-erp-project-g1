import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import "./form_kpi.css"

function FormKpi() {
    const theme = createTheme({
        palette: {
          primary: { main: "#16202a" },
          secondary: { main: "#f4f4f9" },
          activeItem: { main: "#4dedf570" },
          accent: { main: "#4dedf5" },
        },
      });
    return (
        <ThemeProvider theme={theme}>       
       
     
       <Button
          Name="Add team"
          startIcon={<AddIcon />}
          color="accent"
          variant="contained"
          sx={{
            margin: "2pc 0",
           
          }}
        >
          Add Project
        </Button>
 
        </ThemeProvider>
    )
}

export default FormKpi