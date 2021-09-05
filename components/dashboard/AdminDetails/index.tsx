import React, { useState } from 'react'
import s from './AdminDetails.module.scss'

const AdminDetails = () => {
  const [tab, setTab] = useState<string>('Home')
  return (
    <div className={s.adminDetails}>
      <div className={s.left}>
        <div onClick={() => setTab('Home')}>
          <img src="./icons/alikah-ads-dashboard-home-icon.svg" alt="home" />
          <p>Home</p>
        </div>
        <div onClick={() => setTab('User Manager')}>
          <img src="./icons/alikah-ads-user-manager-icon.svg" alt="user manager" />
          <p>user manager</p>
        </div>
        <div onClick={() => setTab('Monetization/Adverts')}>
          <img src="./icons/alikah-ads-monetization-icon.svg" alt="monetizations" />
          <p>Monetizations</p>
        </div>
        <div onClick={() => setTab('Billings')}>
          <img src="./icons/alikah-ads-billings-icon.svg" alt="billings" />
          <p>Billings</p>
        </div>
        <div onClick={() => setTab('Manage Categories')}>
          <img src="./icons/alikah-ads-manage-categories-icon.svg" alt="alikah manage categories" />
          <p>Manage Categories</p>
        </div>
        <div onClick={() => setTab('Messages')}>
          <img src="./icons/alikah-ads-mail-icon.svg" alt="alikah messages" />
          <p>Messages</p>
        </div>
        <div onClick={() => setTab('Settings')}>
          <img src="./icons/alikah-ads-settings-icon.svg" alt="alikah dashboard settings" />
          <p>Settings</p>
        </div>
        <div onClick={() => setTab('Reports')}>
          <img src="./icons/alikah-ads-report-icon.svg" alt="alikah report" />
          <p>Reports</p>
        </div>
      </div>
      <div className={s.right}>
        {tab === 'Home' && <>home</>}
        {tab === 'User Manager' && <>user manager</>}
        {tab === 'Monetization/Adverts' && <>Monetizations/Adverts</>}
        {tab === 'Billings' && <>Billings</>}
        {tab === 'Manage Categories' && <>Manage Categories</>}
        {tab === 'Settings' && <>Settings</>}
        {tab === 'Messages' && <>Messages</>}
        {tab === 'Reports' && <>Reports</>}
      </div>
    </div>
  )
}

export default AdminDetails
