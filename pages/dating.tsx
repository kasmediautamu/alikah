import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import fetchDating from '../lib/fetcher/dating'
import SponsoredCategorySlider from '../components/Allslides/SponsoredAdSliderCategory'
import s from './SingleCat.module.scss'

export async function getStaticProps() {
  const datingAds = await fetchDating()
  return {
    props: { datingAds }
  }
}


const DatingPage = ({datingAds}) => {
// https://stackoverflow.com/questions/67624601/how-to-implement-infinite-scroll-in-next-js
  return (
    <>
    <div className={s.pagetitle}>
    <p><span>{datingAds.data.length} Ads </span> in Dating in {`South Africa`}</p>
    <p className={s.slidetitle}>Sponsored Ads</p>
    </div>
    <div className={s.pagewrapper}>
      <div className="sliderWrapper">
      <SponsoredCategorySlider sponsoredAds={datingAds.data} />
      </div>
      <div className={s.advertswrapper}>
      {datingAds === null || datingAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={datingAds.data} />
      )}
      </div>
    </div>
    </>
  )
}

export default DatingPage
DatingPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
