import React from 'react'
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
const SingleAd = () => {
  const Adverts = adverts.map((advert) => {
    return advert
  })
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
        <Link href="/">
        <p className={s.viewmore}>
          View More
        </p>
        </Link>
      </div>
      <div className={s.right}>
      <ContactPanel />
      </div>
    </div>
  )
}
export default SingleAd


