import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// Define a schema for the submission form
const validationSchema = yup.object({
  title: yup
    .string("Enter a game title")
    .min(1, "Please enter a title!")
    .required("Please enter a title!"),
});

export default function Suggestion() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  const handleCloseSubmit = (e) => {
    if (formik.touched.title && Boolean(formik.errors.title) === false) {
      setOpen(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      /* Change on deployment to /suggest */
      fetch("http://localhost:3001/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 1),
      });
    },
  });

  return (
    <div>
      <ButtonGroup
        variant="contained"
        color="primary"
        className="suggest-container"
      >
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Suggest Game
        </Button>
      </ButtonGroup>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog"
        TransitionComponent={Transition}
      >
        <DialogTitle id="form-dialog">Suggest Game</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Suggest a Musou game for me to review! Please limit these to games
              in the Musou genre (no, Persona 5 Strikers does not count).
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              name="title"
              label="Game Title"
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              type="text"
              fullWidth
              autoComplete="off"
              helperText={formik.touched.title && formik.errors.title}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseSubmit} color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
