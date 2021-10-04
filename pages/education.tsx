import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import adverts from '../dummyData/adverts.json'
import db from '../lib/mongodb'
import axios from 'axios'
import fetchEducation from '../lib/fetcher/education'

export async function getStaticProps() {
  const educationAds = await fetchEducation()
  return {
    props: { educationAds }
  }
}

const EducationPage = ({educationAds}) => {

  return (
    <>
      {
        educationAds === null || educationAds=== undefined ? <>loading</> :<SingleCategory Adverts = {educationAds.data}/>
      }
    </>
  )
}

export default EducationPage
EducationPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}


