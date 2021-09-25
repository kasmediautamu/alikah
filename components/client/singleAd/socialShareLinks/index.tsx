import React, { useState } from 'react'
import s from './socialShareLinks.module.scss'

const SocialBar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const SocialLinks = () => {
    return (
      <div className={s.socialmediaApp}>
         <p className={s.link}><img src="./icons/facebook.svg" alt="facebook" /> Facebook</p>
         <p className={s.link}><img src="./icons/messenger.svg" alt="messenger" /> Messenger</p>
         <p className={s.link}><img src="./icons/whatsapp.svg" alt="messenger" /> WhatsApp</p>
         <p className={s.link}><img src="./icons/twitter.svg" alt="twitter" /> Twitter</p>
         <p className={s.link}><img src="./icons/link.svg" alt="twitter" /> Copy URL</p>
      </div>
    )
  }
  return (
    <div className={s.socialBar}>
      <div className={s.socialBarLeft}>
        <p>
          <img src="./icons/calendar.svg" alt="" /> {'3 months ago'}
        </p>
      </div>
      <div className={s.socialBarRight}>
        <div className={s.shareLinks} onClick={() => setShowLinks(!showLinks)}>
          <img src="./icons/share.svg" alt="" /> share
          {showLinks ? < SocialLinks/> : null}
        </div>
        <div className={s.shareLinks} onClick={() => console.log('share')}>
          <img src="./icons/danger.svg" alt="" /> Report Ad
        </div>
      </div>
    </div>
  )
}
export default SocialBar
