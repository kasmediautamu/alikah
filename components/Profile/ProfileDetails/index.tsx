import React, { useState } from 'react'
import Activity from '../Activity'
import Active from '../Activity/Active'
import All from '../Activity/All'
import Closed from '../Activity/Closed'
import Declined from '../Activity/Declined'
import Drafts from '../Activity/Drafts'
import Reviewing from '../Activity/Reviewing'
import s from './ProfileDetails.module.scss'

/*
 * left side of profile page
 * each link triggers a change in view on right
 */
const ProfileDetails = () => {
  const [view, setView] = useState('Active')
  return (
    <div className={s.profile}>
      <div className={s.left}>
        <div className={s.profileHeader}>
          <div className={s.settings}>
            <p data-testid="settings">Settings</p>
            <img src="./icons/alikah-ads-settings-icon.svg" alt="alikah ads settings icon" />
          </div>
          <div className={s.summary}>
            <img
              src="./icons/alikah-ads-profile-image-placeholder.svg"
              alt="alikah Ads Profile Image"
            />
            <p data-testid="name">{'Ivan Kabuye'}</p>
            <p data-testid="phone">{'0700756217'}</p>
          </div>
        </div>
        <div className={s.profileFeatures}>
          <div>
            <img src="./icons/alikah-ads-list-icon.svg" alt="alikah ads myadverts icon" />
            <p data-testid="myadverts">My adverts</p>
          </div>
          <div>
            <img src="./icons/alikah-ads-feedback-icon.svg" alt="alikah ads Feedback icon" />
            <p data-testid="feedback">Feedback</p>
          </div>
          <div>
            <img src="./icons/alikah-ads-performance-icon.svg" alt="alikah ads Performance icon" />
            <p data-testid="performance">Performance</p>
          </div>
        </div>
        <div className={s.profileFeatureInd}>
          <img src="./icons/alikah-ads-premium-services-icon.svg" alt="alikah Premium services" />
          <p data-testid="premium">Premium Services</p>
        </div>
        <div className={s.profileFeatureInd}>
          <img src="./icons/alikah-ads-followers-icon.svg" alt="alikah Followers" />
          <p data-testid="followers">
            Followers <span>{'1'}</span>
          </p>
        </div>
        <div className={s.profileFeatureInd}>
          <img src="./icons/alikah-ads-help-icon.svg" alt="alikah frequently asked questions" />
          <p data-testid="faq">Frequently Asked Questions</p>
        </div>
      </div>
      <div className={s.right}>
        <Activity onSetView={setView} activeView={view} />
        {view === 'Active' && <Active />}
        {view === 'Reviewing' && <Reviewing />}
        {view === 'Declined' && <Declined />}
        {view === 'Drafts' && <Drafts />}
        {view === 'Closed' && <Closed />}
        {view === 'All' && <All />}
      </div>
    </div>
  )
}

export default ProfileDetails
