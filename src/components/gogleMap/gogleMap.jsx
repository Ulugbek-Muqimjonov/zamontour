import React from "react";

const GogleMap = () => {
  return (
    <div className="gogleMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.2807827516635!2d69.22181007591168!3d41.25922197131638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a763831bed1%3A0x30205e61d82f5102!2z0K7QttC90YvQuSDQktC-0LrQt9Cw0Ls!5e0!3m2!1sru!2s!4v1721756633868!5m2!1sru!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GogleMap;
