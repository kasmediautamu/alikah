import React, { MutableRefObject, useRef } from 'react'
import s from './Slider.module.scss'

const Slider = ({adverts}:any) => {
  const showIcons = adverts.length > 2
  const listRef = useRef() as MutableRefObject<HTMLDivElement>
  const scrollLeft = () => {
    if (listRef && listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 240,
        behavior: 'smooth',
      })
    }
  }
  const scrollRight = () => {
    if (listRef && listRef.current) {
      listRef?.current?.scrollBy({
        top: 0,
        left: -240,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="slide-container">
      {showIcons && (
        <img src="./icons/arrow-left.svg" alt="" className="icon-cursor" onClick={scrollLeft} />
      )}
      {adverts.length && (
        <div className="items-container" ref={listRef}>
          {adverts.map((item, id) => (
            <div key={item.id} className="single-item-container">
              <div className={s.adWrapper}>
              <img src={item.imageURL[0]} alt={item.title} />
              </div>
              <div className={s.priceTitle}>
              <p className={s.title}>{item.title}</p>
              <p className={s.price}>{'R'}{' '}{item.price}</p>
              </div>
              <div className={s.location}>
              <p className={s.province}><img src="./icons/location.svg" alt="" /> {item.address.province}</p>
              <p className={s.city}>{item.address.city}</p>
              </div>

            </div>
          ))}
        </div>
      )}
      {showIcons && (
        <img src="./icons/arrow-right.svg" alt="" className="icon-cursor" onClick={scrollRight} />
      )}
    </div>
  )
}

export default Slider
