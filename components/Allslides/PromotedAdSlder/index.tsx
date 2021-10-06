import React, { Component } from 'react'
import Slider from 'react-slick'
import s from './PromotedAdSlider.module.scss'

const PromotedAdSlider = ({ adverts }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false
  }

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
                    {ad.address.province}
                    {','}
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

export default PromotedAdSlider
