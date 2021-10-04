import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import fetchVehicles from '../lib/fetcher/vehicles'

export async function getStaticProps() {
  const vehicleAds = await fetchVehicles()
  return {
    props: { vehicleAds }
  }
}


const VehiclePage = ({vehicleAds}) => {
  console.log(vehicleAds)

  return (
    <>
      {vehicleAds === null || vehicleAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={vehicleAds.data} />
      )}
    </>
  )
}

export default VehiclePage
VehiclePage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
