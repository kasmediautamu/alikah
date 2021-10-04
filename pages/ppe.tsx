import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchPPE from '../lib/fetcher/ppe'

export async function getStaticProps() {
  const ppeAds = await fetchPPE()
  return {
    props: { ppeAds }
  }
}

const PPEPage = ({ppeAds}) => {

  return (
    <>
      {ppeAds === null || ppeAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={ppeAds.data} />
      )}
    </>
  )
}

export default PPEPage
PPEPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
