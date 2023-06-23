import React from "react";
import { Button, Input, Label } from "reactstrap";

const Search = () => {
  return (
    <>
      <div className="form">
        <div className={"input"}>
          <Label for="name">Enter a Game Title: </Label>
          <Input />
        </div>
        <div className="buttons">
          <Button>Search</Button>
          <Button>Reset</Button>
        </div>
      </div>
    </>
  );
};

export default Search;
