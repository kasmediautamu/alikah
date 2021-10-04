import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchServices from '../lib/fetcher/services'

export async function getStaticProps() {
  const serviceAds = await fetchServices()
  return {
    props: { serviceAds }
  }
}

const ServicePage = ({serviceAds}) => {

  return (
    <>
      {serviceAds === null || serviceAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={serviceAds.data} />
      )}
    </>
  )
}

export default ServicePage
ServicePage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
