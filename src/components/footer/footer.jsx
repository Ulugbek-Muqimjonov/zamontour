import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer-header">
        <strong className="footer-title">ARE YOU LOOKING TO TRAVEL ?</strong>
        <span className="footer-subtitle">
          Make A Reservation By Clicking The Button
        </span>
        <Link to={"#contact"} className="footer-link">
          Books Yours Now
        </Link>
      </div>
      <div className="footer-bottom">
        <span>Copyright © 2024 Zamon Business </span>
        <span>Tour. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
