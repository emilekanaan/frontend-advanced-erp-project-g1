import React from 'react'
import "./form_project.css"
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Input, TextField } from "@mui/material";
import MultipleSelectPlaceholder from '../DropDown';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function FormProject() {

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

    const theme = createTheme({
        palette: {
          primary: { main: "#16202a" },
          secondary: { main: "#f4f4f9" },
          activeItem: { main: "#4dedf570" },
          accent: { main: "#4dedf5" },
        },
      });
    return (
        <>
            <ThemeProvider theme={theme}>
                <Button
                    onClick={handleClickOpen}
                    name="Add team"
                    color="accent"
                    startIcon={<AddIcon />}
                    variant="contained"
                    sx={{
                        margin: "2pc 0",
                    }}
                >
                    Add Project
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: "relative", width: "500px" }}>
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
                                Add New Project
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List sx={{ backgroundColor:"#2F4550" }}>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            sx={{
                                width: "90%",
                                margin: "1pc",
                                '& .MuiOutlinedInput-root': {
                                    color: "white", // sets the text color to white
                                    '& fieldset': {
                                      borderColor: "white", // sets the border color to white
                                    }} 
                            }}
                        />
                        <MultipleSelectPlaceholder  />
                        {/* <Divider sx={{ width: "100%", margin: "1pc" }} /> */}
                    </List>
                </Dialog>
            </ThemeProvider>
        </>
    )
}

export default FormProject