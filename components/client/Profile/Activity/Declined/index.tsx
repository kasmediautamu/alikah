import React from 'react'
import s from './Declined.module.scss'

/*
 * @returns customer ads that have been revoked
 */
const Declined = () => {
  return (
    <div className={s.declinedAds}>
       <img src="./illustrations/alikah-ads-declined-illustration.svg" alt="declined ads" />
       <p>If you close your advert, we’ll save it here safe and sound.</p>
       <p>You can publish it again, edit or delete completely anytime</p>
    </div>
  )
}

export default Declined
