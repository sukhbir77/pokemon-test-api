import React from "react";

import "./index.scss";
import { dummyData } from "../../data/dummy";

const Marquee = (props: { clickEvent: (arg0: any) => void }) => {
  return (
    <div className="maylike-products-wrapper">
      <p className="marquee-heading">You may also like</p>
      <div className="marquee">
        <div className="maylike-products-container track">
          {dummyData.map((item) => (
            <div
              className="marquee-image"
              onClick={() => props.clickEvent(item.url)}
            >
              <img key={item.id} src={item.imageUrl} alt="Pokemon" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
