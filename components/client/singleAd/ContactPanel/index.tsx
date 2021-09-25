import Link from 'next/link'
import React from 'react'
import Button from '../../FormFields/Button'
import s from './ContactPanel.module.scss'
const ContactPanel = () => {
  return (
    <div className={s.contactpanel}>
      <div className={s.offerPanel}>
        <p>
          {'R'}
          {''}
          {'150000'} <span>{'Negotiable'}</span>
        </p>
        <Button>Make an Offer</Button>
      </div>
      <div className={s.profilePanel}>
        <div className={s.profile}>
          <img src="/icons/alikah-ads-profile-image-placeholder.svg" alt="" />
          <div >
            <p className={s.profilename}>Kabuye Ivan</p>
            <div className={s.background}>
              <p>
                <img src="./icons/alikah-ads-mail-icon.svg" alt="" /> Replies within a day
              </p>
              <p>
                <img src="./icons/selected-sponsorship.svg" alt="" /> 2 years on Alikah
              </p>
            </div>
          </div>
        </div>
        <Button>0700756217</Button>
        <Button>start chat</Button>
      </div>
      <div className={s.safetyTips}>
        <p>Safety Tips</p>
        <p>
          <img src="/icons/list-check.svg" alt="" />
          Do not submit any upfront fees for a real estate inspection.
        </p>
        <p>
          <img src="/icons/list-check.svg" alt="" />
          Do not go to unfamiliar places alone.
        </p>
        <p>
          <img src="/icons/list-check.svg" alt="" />
          Double check agent's background.
        </p>
      </div>
      <Link href={`/create-ad`}>
        <Button>Post Ad like this</Button>
      </Link>
    </div>
  )
}
export default ContactPanel
