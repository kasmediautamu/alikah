import React from 'react'
import s from './Closed.module.scss'

/*
 * @returns customer ads that are closed
 */
const Closed = () => {
  return (
    <div className={s.closedAds}>
       <img src="./illustrations/alikah-ads-closed-illustration.svg" alt="closed ads" />
       <p>If you close your advert, we’ll save it here safe and sound.</p>
       <p>You can publish it again, edit or delete completely anytime</p>
    </div>
  )
}

export default Closed
