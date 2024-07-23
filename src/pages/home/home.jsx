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

        <BestLoactionSlider/> 
        </div>
      </div>
    </>
  );
};

export default Home;
