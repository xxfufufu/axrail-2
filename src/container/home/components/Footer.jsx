import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/footer.css";

const Footer = ({ menu }) => {
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <div className="footer-container">
      {menu.map((item, index) => (
        <div
          key={index}
          onClick={() => handleActive(index)}
          className={`menu ${index === active ? "actived" : ""}`}
        >
          <FontAwesomeIcon
            icon={item.icon}
            className={`icon ${index === active ? "actived" : ""}`}
          />
          <div>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
