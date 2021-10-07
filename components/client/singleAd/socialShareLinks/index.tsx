import axios from 'axios'
import router from 'next/router'
import React, { useState } from 'react'
import BaseModal from '../../Modal'
import MessageForm from '../MessageForm'
import s from './socialShareLinks.module.scss'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../../../../redux/store'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
} from 'react-share'
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const SocialBar = () => {
  const { redirect }: any = router.query
  const [showLinks, setShowLinks] = useState(false)
  const [show, setShow] = useState(false)
  const [message, setMessage] = React.useState<string>('')
  const { title, _id, description } = useAppSelector((state: any) => state.singleadvert.singleadvert)
  const submittedForm = {
    //a user can report an ad if usigned in
    senderId: 'logged in user', //to be change after getting userinfo
    advertId: _id,
    message: {
      subject: title ? title : 'someone is inquiring about your ad',
      body: message,
    },
  }

  const triggerModal = () => {
    setShow(true)
    console.log('modalopen')
  }
  const untriggerModal = () => {
    setShow(false)
  }
  const onclick = async () => {
    //call api here
    try {
      const { data } = await axios.post('/api/reports', {
        ...submittedForm,
      })
      if (data) {
        console.log(data)
      }
      router.push(redirect || '/')
    } catch (err) {
      console.log(err)
    }
  }
  const onchange = (e) => {
    setMessage(e.target.value)
  }
  const SocialLinks = () => {
    return (
      <div className={s.socialmediaApp}>
        <FacebookShareButton
          url={`${process.env.BASE_URL}`}
          quote={title}
          hashtag={`#${description}`}
        >
          <p className={s.link}>
            <img src="./icons/facebook.svg" alt="facebook" /> Facebook
          </p>

        </FacebookShareButton>
        <TwitterShareButton
          url={`${process.env.BASE_URL}`}
          title={title}
          hashtags={[`${description}`]}
        >
          <p className={s.link}>
            <img src="./icons/twitter.svg" alt="twitter" /> Twitter
          </p>

        </TwitterShareButton>
        <WhatsappShareButton
          url={`${process.env.BASE_URL}`}
          title={title}
          separator=":: "
        >
          <p className={s.link}>
            <img src="./icons/whatsapp.svg" alt="whatsapp" /> Whatsapp
          </p>
        </WhatsappShareButton>

        <FacebookMessengerShareButton
          url={`${process.env.BASE_URL}`}
          title={title}
          appId={''}
        >
          <p className={s.link}>
          <img src="./icons/messenger.svg" alt="messenger" /> Messenger
          </p>
        </FacebookMessengerShareButton>
      </div>
    )
  }
  return (
    <>
      <div className={s.socialBar}>
        <div className={s.socialBarLeft}>
          <p>
            <img src="./icons/calendar.svg" alt="" /> {'3 months ago'}
          </p>
        </div>
        <div className={s.socialBarRight}>
          <div className={s.shareLinks} onClick={() => setShowLinks(!showLinks)}>
            <img src="./icons/share.svg" alt="" /> share
            {showLinks ? <SocialLinks /> : null}
          </div>
          <div className={s.shareLinks} onClick={triggerModal}>
            <img src="./icons/danger.svg" alt="" /> Report Ad
          </div>
        </div>
      </div>
      <BaseModal
        handleClose={untriggerModal}
        show={show}
        anchorClass="modal__anchor"
        btnlabel="Update"
        backgroundShade="modal-background"
        modalTitle="Report Advert"
      >
        <MessageForm onchange={onchange} onclick={onclick} />
      </BaseModal>
    </>
  )
}
export default SocialBar
