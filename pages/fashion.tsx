import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchFashion from '../lib/fetcher/fashion'

export async function getStaticProps() {
  const fashionAds = await fetchFashion()
  return {
    props: { fashionAds }
  }
}

const FashionPage = ({fashionAds}) => {

  return (
    <>
      {fashionAds === null || fashionAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={fashionAds.data} />
      )}
    </>
  )
}

export default FashionPage
FashionPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
