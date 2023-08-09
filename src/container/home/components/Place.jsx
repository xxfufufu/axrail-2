import React from "react";
import "./style/place.css";

const Place = ({ data, handleDetail }) => {
  return (
    <div className="place-container">
      <h4>Nearby</h4>
      {data.map((item, index) => (
        <div onClick={() => handleDetail(item)} key={index} className="place">
          <div className="name">{item.name_place}</div>
          <div className="description">{item.description}</div>
          <div className="operational">{`Open until ${item.closed}`}</div>
        </div>
      ))}
    </div>
  );
};

export default Place;
