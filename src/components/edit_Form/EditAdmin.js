import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Input, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import Edit from "@mui/icons-material/Edit";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
    palette: {
        primary: { main: "#16202a" },
        secondary: { main: "#f4f4f9" },
        activeItem: { main: "#4dedf570" },
        accent: { main: "#4dedf5" },
    },
});

function EditAdmin() {
    const test = () => {
        console.log("clicked!!!");
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (


        <>
            <ThemeProvider theme={theme}>
                <Button
                    onClick={handleClickOpen}
                    name="Add team"
                    color="accent"
                  
                    
                    variant="contained"
                    sx={{
                        backgroundColor: "transparent",
                        padding: "0.5pc",
                        color:"#16202a",
                        "&:hover": {
                            backgroundColor: "#4dedf5",
                            color: "#16202a",
    
                        },
                    }}
                >
                  <Edit/>
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: "relative", width: "550px" }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Edit Admin
                            </Typography>
                                           <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List sx={{ width: "60%", margin: "auto" }}>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            sx={{
                                width: "90%",
                                margin: "1pc"
                            }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            sx={{
                                width: "90%",
                                margin: "1pc"
                            }}
                        />
                          <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" sx={{width:"90%", margin: "1pc"}}>
        Admin image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
                        {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
                    </List>
                </Dialog>
            </ThemeProvider>
        </>
    );
}

export default EditAdmin;
