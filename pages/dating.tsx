import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchDating from '../lib/fetcher/dating'

export async function getStaticProps() {
  const datingAds = await fetchDating()
  return {
    props: { datingAds }
  }
}

const DatingPage = ({datingAds}) => {

  return (
    <>
      {datingAds === null || datingAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={datingAds.data} />
      )}
    </>
  )
}

export default DatingPage
DatingPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
