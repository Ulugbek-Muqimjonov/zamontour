import { Link } from "react-router-dom";
import "./sliderCard.css";
const SliderCard = ({ item }) => {
  const { papulation, avg_price, territory } = item;
  return (
    <div className="sliderCard ">
      <div className="slider-info slider-populationInfo">
        Population:
        <span className="info">{papulation} M</span>
      </div>
      <div className="slider-info slider-territory">
        Territory:
        <span className="info">
          {territory} KM<em>2</em>
        </span>
      </div>
      <div className="slider-info slider-avgPrice">
        AVG Price:
        <span className="info">${avg_price}</span>
      </div>
      <Link to={"#contact"} className="slider-infobtn">Explore More</Link>
    </div>
  );
};

export default SliderCard;
