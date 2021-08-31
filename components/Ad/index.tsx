import React from "react";
import Categorizer from "./Categorizer";
import s from "./Ad.module.scss";
const Ad = () => {
  return (
    <div className={s.adWrapper}>
      <div className={s.adCategorySummary}>
        <Categorizer
          category={"Category"}
          subCategory={"For Sale"}
          itemName={"Car"}
          link={'/car'}
        />
      </div>
      <div className={s.ad}>
        <div className={s.adImage}>
          <img src="./images/car.jpg" alt="alikah ads image" />
        </div>
        <div className={s.adDetails}>
          <p className={s.adTitle}>Bronchure Holders</p>
          <p className={s.adDescription}>
            Brochure holders are available in a variety of sizes and shapes to
            fit your needs. It may be needed
          </p>
          <div className={s.adBtns}>
            <p>Go to Ad</p>
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
