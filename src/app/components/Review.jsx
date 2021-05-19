import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grow from "@material-ui/core/Grow";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

export default function ReviewDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={props.style} className="review-button">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        REVIEW
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="dialog-top">
          <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
          <IconButton
            aria-label="close"
            className="close-button"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            {props.body}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
