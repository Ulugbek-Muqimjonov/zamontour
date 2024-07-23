import React from "react";
import { Link } from "react-router-dom";
import "./offerSliderCard.css";
const OfferSliderCard = ({ id, title, people, price }) => {
  return (
    <div className={`offerCard ${`offerCard${id}`}`}>
      <div className="offerCard-header">
        <div className="offerCard-header-title">
          <h3 className="offerCard-title">{title}</h3>
          <span className="offerCard-subtitle"> {people} check Ins</span>
        </div>
        <span className="offerCard-price">{price ? `$${price}` : ""}</span>
      </div>
      <hr />
      <h4 className="offerCard-innerTitle">Deal Includes</h4>
      <ul className="offerCard-list">
        <li className="offerCard-item">5 Days Trip &gt; Hotel Included</li>
        <li className="offerCard-item offerCard-item-plane">
          Airplane Bill Included
        </li>
        <li className="offerCard-item offerCard-item-tower">
          Daily Places Visit
        </li>
      </ul>
      <Link className="offerCard-button" to={"#contact"}>
        Make a Reservation
      </Link>
    </div>
  );
};

export default OfferSliderCard;
