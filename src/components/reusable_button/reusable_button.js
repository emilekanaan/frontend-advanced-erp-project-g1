import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./reusable_button.css";

// const theme = createTheme({
//     palette: {
//         primary: "#16202a",
//         secondary: "#f4f4f9",
//         activeItem: "#4dedf570",
//         accent: "#4dedf5",
//     },
// });

function ReusableButton(props) {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                {props.buttonName}
            </Button>
            {/* </ThemeProvider> */}
        </>
    );
}

export default ReusableButton;
