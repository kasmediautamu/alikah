import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchManufucturers from '../lib/fetcher/manufucturers'

export async function getStaticProps() {
  const manufuctureAds = await fetchManufucturers()
  return {
    props: { manufuctureAds }
  }
}

const ManufucturersPage = ({ manufuctureAds }) => {

  return (
    <>
      { manufuctureAds === null || manufuctureAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={ manufuctureAds.data} />
      )}
    </>
  )
}

export default ManufucturersPage
ManufucturersPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
