import React from 'react'
import HorizontalAd from '../../client/singleAd/ad'
import s from './SingleCategory.module.scss'
import Link from 'next/link'
import Slider from '../../client/Slider'
import adverts from '../../../dummyData/adverts.json'
import LeftSideNav from './LeftSideNav'
const SingleCategory = () => {
  const sliderAdverts = adverts.map((advert) => {
    return advert
  })
  const Adverts = adverts.map((advert) => {
    return advert
  })
  return (
    <>
    <div className={s.title}>Sponsored Ads</div>
    <div className={s.sliderWrapper}>
      <Slider adverts={sliderAdverts}/>
    </div>
    <div className={s.singlecatPage}>
      <div className={s.left}>
      <LeftSideNav />
      </div>
      <div className={s.right}>
      <p className={s.topAds}>
          Top Ads
        </p>
        {Adverts && <HorizontalAd adverts={Adverts} />}
        <Link href="/">
        <p className={s.viewmore}>
          View More
        </p>
        </Link>
      </div>
      <div className={s.adspace}>
          Google Ad space
      </div>
    </div>
    </>
    )
}
export default SingleCategory


