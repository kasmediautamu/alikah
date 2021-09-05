import React from 'react'
import s from './Drafts.module.scss'

/*
 * @returns customer ads under drafts
 */
const Drafts = () => {
  return (
    <div className={s.draftAds}>
      <img src="./illustrations/alikah-ads-drafts-illustration.svg" alt="draft ads" />
      <p>
        Drafts are unpublished ads due to some reasons. Draft ads are not displayed on the platform
        until needed changes will be done.
      </p>
    </div>
  )
}

export default Drafts
