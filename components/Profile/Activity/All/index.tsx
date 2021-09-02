import React from 'react'
import s from './All.module.scss'

/*
 * @returns all ads belonging to a user
 */
const All = () => {
  return (
    <div className={s.allAds}>
       <img src="./illustrations/alikah-ads-no-ads-illustration.svg" alt="active ads" />
       <p>There are no adverts yet</p>
       <p>Create new one now</p>
    </div>
  )
}

export default All
