/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { MyContext } from "../../Context/MyContext";
import "./SearchBar.Css";
import Button from "../UI/Button";

const SearchBar = () => {
  const {data, setSearchIsShow, filterBySearch, setFiltredListOpen,setFilteredList } =
    useContext(MyContext);
    
  const searchBarCloseHandler = () => {
    setSearchIsShow(false);
    setFiltredListOpen(true);
    setFilteredList(data)
  };

  return (
    <div className="wrapper">
      <input type="search" className="input" onChange={filterBySearch} />
      <div className="buttons">
        <Button role="button">
        Ara
        </Button>
        <Button
          className="button-3"
          role="button"
          onClick={searchBarCloseHandler}
        >
          Iptal
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
