import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";

const Search = ({ searchTerm, handleSearch }) => {
  const [searchValue, setSearchValue] = useState(searchTerm || "");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchValue);
  };

  return (
    <>
      <div className="form">
        <div className="input">
          <Label for="name"></Label>
          <Input
            placeholder="Enter a game..."
            value={searchValue}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <Button onClick={handleSubmit}>Search</Button>
        </div>
      </div>
    </>
  );
};

export default Search;
