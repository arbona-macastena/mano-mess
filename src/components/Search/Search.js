import React, { useState } from "react";
import Scroll from "../Scroll/Scroll";
import SearchList from "./SearchList";
import Button from "../Button/Button";
import "./Input.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons}></SearchList>
        </Scroll>
      );
    }
  }

  return (
    <section className="search">
      <div className="search--headline">
        <h2 className="f2">Find the perfect candidate!</h2>
      </div>
      <div className="search--input">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
        <Button />
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
