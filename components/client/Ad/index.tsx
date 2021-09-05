import React from "react";
import s from "./Ad.module.scss";
const Ad = () => {
  return (
    <div className={s.adWrapper}>
      <div className={s.ad}>
        <div className={s.adImage}>
          <img src="./images/car.jpg" alt="alikah ads image" />
        </div>
        <div className={s.adDetails}>
          <p className={s.adTitle}>Bronchure Holders</p>
          <p className={s.adDescription}>
            Brochure holders are...
          </p>
          <div className={s.adBtns}>
            <p>
              <small>$</small>10,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ad;
