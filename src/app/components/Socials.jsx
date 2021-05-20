import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Suggestion from "./Suggestion";

function Socials() {
  return (
    <ButtonGroup variant="contained" color="primary">
      <Button
        href="https://github.com/michael-stubbs"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Button>
      <Suggestion />
      <Button
        href="https://twitter.com/__stubbs__"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Button>
    </ButtonGroup>
  );
}

export default Socials;
