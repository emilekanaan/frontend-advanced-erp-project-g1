import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Delete from "@mui/icons-material/Delete";
import axios from "axios";
function DeleteTeam(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {

    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDelete=()=>{
    console.log(props)
    setOpen(false);
    axios.delete(`${process.env.REACT_APP_URL}/${props.url}/${props.Id}`).then((response)=>console.log(response)).catch((error)=>console.log(error));
  }

  return (
    <div>
      <Button
        name="delete team"
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "transparent",
          padding: "0.5pc",
          color: "#16202a",
          "&:hover": {
            backgroundColor: "#4dedf5",
            color: "#16202a",
          },
        }}
      >
        {<Delete />}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            color: "#f4f4f9",
            backgroundColor: "#2F4550",
          }}
        >
          {`Are you sure do you want to delete this ${props.text}?`}
        </DialogTitle>
        <DialogActions
          sx={{
            backgroundColor: "#2F4550",
          }}
        >
          <Button onClick={handleClose} sx={{ color: "#f4f4f9" }}>
            Cancle
          </Button>
          <Button
            onClick={handleCloseDelete}
            variant="contained"
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteTeam;
