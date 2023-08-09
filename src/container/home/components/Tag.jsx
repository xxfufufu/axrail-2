import React, { useState } from "react";
import "./style/tag.css";

const Tag = ({ data }) => {
  const [active, setActive] = useState(0);
  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <div className="tag">
      {data.map((item, i) => (
        <div
          onClick={() => handleActive(i)}
          key={i}
          className={`tag-content ${i === active ? "actived" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Tag;
