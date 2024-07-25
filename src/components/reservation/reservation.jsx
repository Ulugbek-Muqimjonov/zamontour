import "./reservation.css";
const Reservation = () => {
  return (
    <div className="reservation-formWrap">
      <h4 className="reservation-title">
        Make Your <span>Reservation</span> Through This <span>Form</span>
      </h4>
      <form className="reservation__form">
        <label className="reservation__form-lable">
          Your Name
          <input
            className="reservation__form-inp"
            type="text"
            name="user_name"
            placeholder="Ex. John Smithee"
            required
          />
        </label>
        <label className="reservation__form-lable">
          Your Phone Number
          <input
            className="reservation__form-inp"
            type="tel"
            name="user_phone"
            placeholder="Ex. +99899 999 99 99"
            required
          />
        </label>
        <label className="reservation__form-lable">
          Number of Guest
          <select name="numberof_guest" className="reservation__form-inp">
            <option value="" disabled hidden selected>
              ex. 3 or 4 or 5
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4+</option>
          </select>
        </label>
        <label className="reservation__form-lable">
          Check In Date
          <input className="reservation__form-inp" type="date" name="date" />
        </label>
        <label className="reservation__form-lable">
          Choose Your Destination
          <select name="destionation" className="reservation__form-inp">
            <option value={"Antaliya"} selected>
              Antaliya
            </option>
            <option value={"Istanbul"}>Istanbul</option>
            <option value={"Dubai"}>Dubai</option>
            <option value={"Sharm El-Sheikh"}>Sharm El-Sheikh</option>
            <option value={"Kuala Lumpur"}>Kuala Lumpur</option>
            <option value={"Canada"}>Canada</option>
            <option value={"England"}>England</option>
          </select>
        </label>
        <label className="reservation__form-lable">
          Choose Your Visa Support
          <select name="visa_support" className="reservation__form-inp">
            <option value="" disabled selected hidden>
              Country
            </option>
            <option value={"USA"}>USA</option>
            <option value={"Europe"}>Europe</option>
            <option value={"England"}>England</option>
            <option value={"Japan"}>Japan</option>
            <option value={"Oman"}>Oman</option>
            <option value={"Saudi Arabia"}>Saudi Arabia</option>
            <option value={"India"}>India</option>
            <option value={"China"}>China</option>
            <option value={"Hong Kong"}>Hong Kong</option>
          </select>
        </label>
        <button className="reservartion-button" type="submit">Make Your Reservation Now</button>
      </form>
    </div>
  );
};

export default Reservation;
