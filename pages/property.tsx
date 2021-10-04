import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchProperty from '../lib/fetcher/property'

export async function getStaticProps() {
  const propertyAds = await fetchProperty()
  return {
    props: { propertyAds }
  }
}
const PropertyPage = ({propertyAds}) => {

  return (
    <>
      {propertyAds === null || propertyAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={propertyAds.data} />
      )}
    </>
  )
}

export default PropertyPage
PropertyPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
