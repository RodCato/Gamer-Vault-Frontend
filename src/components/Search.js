import React from "react";
import { Button, Input, Label } from "reactstrap";

const Search = () => {
  return (
    <>
      <div className="form">
        <div className={"input"}>
          <Label for="name"></Label>
          <Input placeholder="Enter a game..."/>
        </div>
        <div className="">
          <Button>Search</Button>
        </div>
      </div>
    </>
  );
};

export default Search;
