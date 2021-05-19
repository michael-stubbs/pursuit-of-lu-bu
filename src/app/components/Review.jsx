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

  // Dynamic rating colors
  const setRatingClass = (rate) => {
    if (rate >= 70) {
      return "rating green";
    } else if (rate >= 40) {
      return "rating orange";
    } else {
      return "rating red";
    }
  };

  return (
    <div style={props.style} className="review-button">
      <Button
        size="large"
        variant="contained"
        className="review-button-active"
        color="primary"
        onClick={handleClickOpen}
      >
        REVIEW
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="review-title"
        aria-describedby="review-content"
      >
        <div className="dialog-top">
          <DialogTitle id="review-title">
            {props.title}{" "}
            <div className={setRatingClass(props.rating)}>
              {props.rating} / 100
            </div>
          </DialogTitle>
          <IconButton
            aria-label="close"
            className="close-button"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="dialog-body">
          <DialogContent dividers>
            <DialogContentText id="review-content">
              {props.body}
            </DialogContentText>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
