import React from 'react'
import s from './ImageSlider.module.scss'

const ImageSlider = () => {
  return (
    <div className={s.imageSliderWrapper}>
      <div className={s.head}>
        <p className={s.title}>{'2011 BMW Z$s DRIVE30i A/T'}</p>
        <p className={s.price}>R {'239995'}</p>
      </div>
      <div className={s.imageWrapper}>
        <img src="./images/bmw.jpg" alt={'advert.title'} />
      </div>
    </div>
  )
}
export default ImageSlider
