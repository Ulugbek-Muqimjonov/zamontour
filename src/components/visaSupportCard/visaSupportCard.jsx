import React from "react";
import { Link } from "react-router-dom";
import "./visaSupportCard.css";
const VisaSupportCard = ({ id, title, people }) => {
  return (
    <div className={`offerCard ${`offerCard${id}`}`}>
      <div className="offerCard-header">
        <div className="offerCard-header-title">
          <h3 className="offerCard-title">{title}</h3>
          <span className="offerCard-subtitle"> {people} check Ins</span>
        </div>
      </div>
      <hr />
      <h4 className="offerCard-innerTitle">Deal Includes</h4>
      <ul className="offerCard-list">
        <li className="offerCard-item visaSupportCard-item">Best prices</li>
        <li className="offerCard-item visaSupportCard-item visaSupportCard-item-prosses">
          Short Processing Time
        </li>
        <li className="offerCard-item  visaSupportCard-item visaSupportCard-item-trustworthy">
          Trustworthy Assistance
        </li>
      </ul>
      <Link className="offerCard-button" to={"#contact"}>
        Make a Reservation
      </Link>
    </div>
  );
};

export default VisaSupportCard;
