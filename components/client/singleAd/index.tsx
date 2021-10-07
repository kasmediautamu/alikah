import React, { useState } from 'react'
import ClientLayout from '../Layout'
import HorizontalAd from './ad'
import Description from './Description'
import GeneralDetails from './generalDetails'
import ImageSlider from './ImageSlider'
import SocialBar from './socialShareLinks'
import adverts from '../../../dummyData/adverts.json'
import s from './SingleAd.module.scss'
import ContactPanel from './ContactPanel'
import MessageForm from './MessageForm'

import { useSelector,TypedUseSelectorHook } from 'react-redux'
import type { RootState} from '../../../redux/store'
import axios from 'axios'
import { useRouter } from 'next/router'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const SingleAd = () => {
  const router = useRouter()
  const { redirect }: any = router.query
  const { title,price,_id,userId }  = useAppSelector((state: any) => state.singleadvert.singleadvert)
  const [message,setMessage] = React.useState<string>('')
  const submittedForm = {
    senderId:'logged in user',//change after get userinfo
    receipientId:userId,
    message:{
      subject:title,
      body:message
    }
  }
  const onchange = (e) => {
    setMessage(e.target.value)
  }
  const onclick = async() => {
    //call api here
    try {
      const { data } = await axios.post('/api/messages', {
        ...submittedForm
      })
      if (data) {
        console.log(data)
      }
      router.push(redirect || '/account')
    } catch (err) {
      console.log(err)
    }
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


/**
 * https://www.npmjs.com/package/reduxjs-toolkit-persist
 * https://www.npmjs.com/package/redux-persist
 * https://stackoverflow.com/questions/62881669/redux-state-will-become-to-the-initial-state-after-page-reload-next-js
 *https://medium.com/camperstribe/react-social-media-integration-with-react-share-and-react-helmet-84d9def6a445
 */
