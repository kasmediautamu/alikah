import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchElectronics from '../lib/fetcher/electronics'

export async function getStaticProps() {
  const electronicsAds = await fetchElectronics()
  return {
    props: { electronicsAds }
  }
}
const ElectronicsPage = ({electronicsAds}) => {

  return (
    <>
      {electronicsAds === null || electronicsAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={electronicsAds.data} />
      )}
    </>
  )
}

export default ElectronicsPage
ElectronicsPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
