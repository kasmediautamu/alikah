import React, { Component } from "react";
import Slider from "react-slick";
import s from './Slider.module.scss'

const ManualSlider = ({adverts}:any) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className={s.container}>
      <Slider {...settings}>
      {adverts &&
            adverts.map((ad) => {
              return (
                <div key={ad._id} className={s.slide}>
                  <div className={s.adWrapper}>
                    <img src={ad.imageURL[0]} alt={ad.title} />
                  </div>
                  <div className={s.priceTitle}>
                    <p className={s.title}>{ad.title}</p>
                    <p className={s.price}>
                      {'R'} {ad.price}
                    </p>
                  </div>
                  <div className={s.location}>
                    <p className={s.province}>
                    <img src="./icons/location.svg" alt="" />
                       {ad.address.province}{','}
                    </p>
                    <p className={s.city}>{ad.address.city}</p>
                  </div>
                </div>
              )
            })}
      </Slider>
    </div>
  )
}

export default ManualSlider
