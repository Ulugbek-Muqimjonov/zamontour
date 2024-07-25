import Header from "@/components/header/header";
import Slider from "@/components/slider/slider";
import "./home.css";
import OfferSlider from "@/components/offerSlider/offerSlider";
import VisSupportSlider from "@/components/visaSupportSlider/visaSupportSlider";
import {
  exploreInfo,
  visaSupportIfo,
  visitCountryInfo,
} from "@/components/constants";
import ExploreCard from "@/components/exploreCard/exploreCard";
import VisitCountryCard from "@/components/visitContryCard/visitCoutryCard";
import BestLoactionSlider from "@/components/bestLocationSlider/bestLocationSlider";
import { Link } from "react-router-dom";
import GogleMap from "@/components/gogleMap/gogleMap";
import Reservation from "@/components/reservation/reservation";
import SocialLink from "@/components/socialLinks/socialLinks";
import Footer from "@/components/footer/footer";
const Home = () => {
  return (
    <>
      <Header />
      <div className="swiper-wrap">
        <Slider />
        <div className="container-fluid">
          <div className="offers">
            <h2 className="offers-title">Best Weekly Offers In Each City</h2>
            <p className="offers-subtitle">
              Discover the best weekly offers in each city, curated just for
              you. Immerse yourself in a world of savings and indulge in
              unparalleled experiences.
            </p>
          </div>
        </div>
        <OfferSlider />
        <hr className="line" />
        <div className="container">
          <h2 className="visaSupport-title">Visa Support</h2>
          <p className="visaSupport-subtitle">
            Experience stress-free travel with our expert visa support. We
            provide seamless assistance and comprehensive guidance, ensuring a
            smooth journey.{" "}
          </p>
        </div>
        <VisSupportSlider />
        <hr className="line1" />
        <div className="container">
          <h2 className="offers-title explore-title">
            Explore Destinations with Ease
          </h2>
          <p className="offers-subtitle explore-subtitle">
            Find the best deals on railway and airplane tickets in each city,
            carefully selected for you.
          </p>
          <ul className="exploreList">
            {exploreInfo.map((item) => (
              <ExploreCard
                key={item.id}
                title={item.title}
                img={item.img}
                subtitle={item.subtitle}
                desc={item.desc}
              />
            ))}
          </ul>
          <h2 className="offers-title explore-title">
            Visit One Of Our Countries Now
          </h2>
          <p className="offers-subtitle explore-subtitle countries-subtitle">
            Discover the best offers in each city, curated just for you. Immerse
            yourself in a world of savings and indulge in unparalleled
            experiences.
          </p>
          <ul className="exploreList">
            {visitCountryInfo.map((item) => (
              <VisitCountryCard key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <div className="container">
          <BestLoactionSlider />
        </div>
        <div className="reservation">
          <div className="container">
            <h3 className="reservation-title">Book prefed Deal Here</h3>
            <span className="reservation-line"></span>
            <h4 className="reservation-subtitle">Make Your Reservation</h4>
            <Link className="reservation-link" to={"#contact"}>
              Discover More
            </Link>
          </div>
        </div>
        <div className="myconatiner">
          <ul className="call-list">
            <li className="call-item">
              <span className="call-item-title">Make a Phone Call</span>
              <a className="call-link" href="tel:998992999996">
                +998 99 299 99 96
              </a>
            </li>
            <li className="call-item">
              <span className="call-item-title call-item-title-email">
                Contact Us via Email
              </span>
              <a href="mailto:zamonbiznestour@mail.ru" className="call-link">
                zamonbiznestour@mail.ru
              </a>
            </li>
            <li className="call-item">
              <span className="call-item-title call-item-title-adress">
                Visit Our Offices
              </span>
              <address>
                <a
                  className="call-link"
                  href="https://yandex.uz/maps/10335/tashkent/house/YkAYdw9gTEIFQFprfX54dHxnZg==/?ll=69.180572%2C41.295042&z=16"
                  target="blank"
                >
                  15/25, Chilanzar - 9, Tashkent city
                </a>
              </address>
            </li>
          </ul>
          <GogleMap />
          <Reservation />
          <SocialLink />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
