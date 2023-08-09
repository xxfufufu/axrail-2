import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style/header.css";

const Header = () => {
  return (
    <div className="header">
      <h3>Find A Store</h3>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default Header;
