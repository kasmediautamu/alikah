import React, { useState } from 'react'
import ClientLayout from '../Layout'
import HorizontalAd from './ad'
import Description from './Description'
import GeneralDetails from './generalDetails'
import ImageSlider from './ImageSlider'
import SocialBar from './socialShareLinks'
import adverts from '../../../dummyData/adverts.json'
import s from './SingleAd.module.scss'
import Link from 'next/link'
import ContactPanel from './ContactPanel'
import MessageForm from './MessageForm'

const initialFormState = {
  message:''
}
const SingleAd = () => {
  const [message,setMessage] = React.useState<string>('')
  const submittedForm = {
    message:message
  }
  const onchange = (e) => {
    setMessage(e.target.value)
  }
  const onclick =() => {
    console.log(submittedForm)
    //call api here
  }
  const Adverts = adverts.map((advert) => {
    return advert
  })
  /*
   *message form
   */


  return (
    <div className={s.singleadPage}>
      <div className={s.left}>
        <ImageSlider />
        <SocialBar />
        <GeneralDetails />
        <Description />
        <p className={s.relatedAds}>
          Related Ads
        </p>
        {Adverts && <HorizontalAd adverts={Adverts} />}

        <p className={s.viewmore}>
          View More
        </p>

      </div>
      <div className={s.right}>
      <ContactPanel >
        <MessageForm onchange={onchange} onclick={onclick}/>
      </ContactPanel>
      </div>
    </div>
  )
}
export default SingleAd


