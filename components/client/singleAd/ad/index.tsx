import React from 'react'
import s from './horizontal.module.scss'

const HorizontalAd = ({ adverts }) => {
  return (
    <div>
      {adverts.length && (
        <div >
          {adverts.map((item, id) => (
            <div className={s.Advert} key={item.id} >
              <div className={s.imageWrapper} >
                <img src={item.imageURL[0]} alt={item.title} />
              </div>
              <div className={s.detailsWrapper}>
                <p className={s.Adtitle}>{item.title}</p>
                <p className={s.Adprice}>{'R'}{' '}{item.price}</p>
                <p className={s.Addescription}>{item.description}</p>
                <div className={s.address}>
                  <img src="./icons/location.svg" alt="" />
                  <p>{item.address.province},{' '}{item.address.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default HorizontalAd
