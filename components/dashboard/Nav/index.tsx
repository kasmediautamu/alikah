import React from 'react'
import s from './Nav.module.scss'
const Nav = () => {
  return (
    <div className={s.dashboardNav}>
      <div className={s.logo}>Alikah Ads</div>
      <div className={s.menuItems}>
        <div>
          <img src="./icons/alikah-ads-notifications.svg" alt="notifications icon" />
          <p>
            Notifications(<span>{'10'}</span>)
          </p>
        </div>
        <div>
          <img src="./icons/alikah-ads-settings-icon.svg" alt="settings icon" />
          <p>Settings</p>
        </div>
        <div>
          <img src="./icons/alikah-ads-profile-image-placeholder.svg" alt="user profile Image" />
        </div>
      </div>
    </div>
  )
}
export default Nav
