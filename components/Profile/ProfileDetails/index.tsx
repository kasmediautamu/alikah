import React from 'react'
import s from './ProfileDetails.module.scss'

const ProfileDetails = () => {
  return (
    <div className={s.profile}>
      <div className={s.profileHeader}>
        <div className={s.settings}>
          <p data-testid='settings'>Settings</p>
          <img src="" alt="alikah ads settings icon" />
        </div>
        <div className={s.summary}>
          <img src="" alt="alikah Ads Profile Image" />
          <p data-testid='name'>{'Ivan Kabuye'}</p>
          <p data-testid='phone'>{'0700756217'}</p>
        </div>
        <div className={s.profileFeatures}>
          <div>
            <img src="" alt="alikah ads myadverts icon" />
            <p data-testid='myadverts'>My adverts</p>
          </div>
          <div>
            <img src="" alt="alikah ads Feedback icon" />
            <p data-testid='feedback'>Feedback</p>
          </div>
          <div>
            <img src="" alt="alikah ads Performance icon" />
            <p data-testid='performance'>Performance</p>
          </div>
        </div>
        <div className={s.profileFeatureInd}>
            <img src="" alt="alikah Premium services" />
            <p data-testid='premium'>Premium Services</p>
        </div>
        <div className={s.profileFeatureInd}>
            <img src="" alt="alikah Followers" />
            <p data-testid='followers'>Followers <span>{'1'}</span></p>
        </div>
        <div className={s.profileFeatureInd}>
            <img src="" alt="alikah frequently asked questions" />
            <p data-testid='faq'>Frequently Asked Questions</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
