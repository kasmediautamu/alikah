import React from 'react'
import s from './Reviewing.module.scss'

/*
 * @returns customer ads under review
 */
const Reviewing = () => {
  return (
    <div className={s.reviewAds}>
    <img src="./illustrations/alikah-ads-under-review-illustration.svg" alt="under review ads" />
    <p>Alikah checks each advert to make sure everything is correct.</p>
    <p>Your new ads will be displayed here while we check them.</p>
 </div>
  )
}

export default Reviewing
