import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDiamondTurnRight,
  faPhone,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./style/modal.css";

const Modal = ({ close, data }) => {
  return (
    <div>
      <div className="title">
        <h3>{data?.name_place}</h3>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={close} />
      </div>
      <div className="detail-tag-list">
        {data?.tag?.map((item, i) => (
          <div key={i} className="detail-tag">
            {item}
          </div>
        ))}
      </div>
      <hr />
      <div>
        <h4>Address details</h4>
        <div className="content">
          <div className="content-detail">{data?.description}</div>
          <div className="icon-container">
            <FontAwesomeIcon
              icon={faDiamondTurnRight}
              className="icon icon-left"
              style={{ fontSize: "25px" }}
            />
          </div>
        </div>
      </div>
      <div>
        <h4>Contact number</h4>
        <div className="content">
          <div className="content-detail">{data?.phone}</div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faPhone} className="icon icon-left" />
          </div>
        </div>
      </div>
      <div>
        <h4>Hours</h4>
        <div className="hours">
          <div className="hours-day">
            {data?.hours?.map((item, i) => (
              <div key={i} className="day">
                {item.day}
              </div>
            ))}
          </div>
          <div className="hours-time">
            {data?.hours?.map((item, i) => (
              <div key={i} className="hour">
                {`${item.open} to ${item.close}`}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="share">
        <FontAwesomeIcon icon={faArrowUpFromBracket} className="icon" />
        <div>Share store details</div>
      </div>
    </div>
  );
};

export default Modal;
