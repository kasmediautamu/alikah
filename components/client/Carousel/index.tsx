import React from 'react'
import NextLink from 'next/link'
import Link from 'next/link'
import Slider from 'react-slick'
import s from './Carousel.module.scss'
const AutoSlider = ({ sponsoredAds }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  }
  return (
    <div>
      <div className={s.container}>
        <Slider {...settings}>
          {sponsoredAds &&
            sponsoredAds.map((ad) => {
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
    </div>
  )
}
export default AutoSlider
