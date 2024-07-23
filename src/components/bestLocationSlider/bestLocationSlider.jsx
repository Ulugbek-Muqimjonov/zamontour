import "./bestLocationSlider.css";

const BestLoactionSlider = () => {
  return (
    <div className="wrapper">
      <div className="innner">
        <input type="radio" name="slide" id="c1" defaultChecked="" />
        <label htmlFor="c1" className="card">
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Dubai</h4>
              <p>Population:2M</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card">
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Antalya </h4>
              <p>Population:2M</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card">
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Istanbul</h4>
              <p>Population:2M</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default BestLoactionSlider;
