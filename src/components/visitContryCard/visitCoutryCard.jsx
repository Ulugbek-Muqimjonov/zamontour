import React from "react";
import { Link } from "react-router-dom";
import "./visitCountryard.css";
const VisitCountryCard = ({ item }) => {
  const { img, title, subtitle, desc, people, territory, price } = item;
  return (
    <li className="exploreCard-item">
      <img className="exploreCard-img" src={img} alt={title} />
      <h4 className="exploreCard-title">{title}</h4>
      <div className="exploreCard-subtitleWrap">
        <span className="exploreCard-subtitle">{subtitle}</span>
        <Link to={"#contact"} className="slider-infobtn">
          Explore More
        </Link>
      </div>
      <p className="exploreCard-desc">{desc}</p>
      <hr className="line" />
      <ul className="visitCountryCard-innerlist">
        <li className="visitCountryCard-innerItem">
          {people} Mil <br /> people
        </li>
        <li className="visitCountryCard-innerItem visitCountryCard-territory">
          {territory} <br /> km2
        </li>
        <li className="visitCountryCard-innerItem visitCountryCard-price">
          ${price}
        </li>
      </ul>
      <hr className="line1" />
      <Link className="visitCountryLink" to={"#contact"}>Need Directions ?</Link>
    </li>
  );
};

export default VisitCountryCard;
