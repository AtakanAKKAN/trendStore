/* eslint-disable no-unused-vars */
import { AiOutlineSearch, AiOutlineClose } from "react-icons/Ai";
import { useContext, useState } from "react";
import { MyContext } from "../../Context/MyContext";
import "./SearchBar.Css";
import Button from "../UI/Button";

const SearchBar = () => {
  const { searchIsShow, setSearchIsShow, filterBySearch, setFiltredListOpen } =
    useContext(MyContext);
    
  const searchBarCloseHandler = () => {
    setSearchIsShow(false);
    setFiltredListOpen(true);
  };

  return (
    <div className="wrapper">
      <input type="search" className="input" onChange={filterBySearch} />
      <div className="buttons">
        <Button role="button">
          <AiOutlineSearch />
        </Button>
        <Button
          className="button-3"
          role="button"
          onClick={searchBarCloseHandler}
        >
          <AiOutlineClose />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
