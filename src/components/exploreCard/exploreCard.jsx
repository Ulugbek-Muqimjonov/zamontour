import React from "react";
import { Link } from "react-router-dom";
import "./exploreCard.css"
const ExploreCard = ({ title, img, subtitle, desc }) => {
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
    </li>
  );
};

export default ExploreCard;
