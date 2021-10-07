import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import s from './Slider.module.scss'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../redux/store'
import { removeSingleAdvert, setSingleAdvert} from '../../../redux/Actions/Adverts'
import { useRouter } from 'next/router'

const ManualSlider = ({adverts}:any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const productDetail = async(advert)=>{
    await dispatch(setSingleAdvert(advert))
    router.push('/single')
  }

useEffect(()=>{

},[])
  return (
    <div className={s.container}>
      <Slider {...settings}>
      {adverts &&
            adverts.map((ad) => {
              return (
                <div key={ad._id} className={s.slide} onClick={()=>productDetail(ad)}>
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
