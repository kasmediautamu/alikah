import React from 'react'
import s from './Active.module.scss'

/*
 * @returns customer ads that are running
 */
const Active = () => {
  return (
    <div className={s.activeAds}>
       <img src="./illustrations/alikah-ads-no-ads-illustration.svg" alt="active ads" />
       <p>There are no adverts yet</p>
       <p>Create new one now</p>
    </div>
  )
}

export default Active
