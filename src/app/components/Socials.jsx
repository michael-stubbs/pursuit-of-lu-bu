import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function Socials() {
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button
        variant="contained"
        color="primary"
        href="https://github.com/michael-stubbs"
      >
        Github
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="https://twitter.com/__stubbs__"
      >
        Twitter
      </Button>
    </ButtonGroup>
  );
}

export default Socials;
