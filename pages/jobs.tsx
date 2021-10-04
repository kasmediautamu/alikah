import React, { useEffect, useState } from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'
import axios from 'axios'
import fetchJobs from '../lib/fetcher/job'

export async function getStaticProps() {
  const jobAds = await fetchJobs()
  return {
    props: { jobAds }
  }
}

const JobPage = ({jobAds}) => {


  return (
    <>
      {jobAds === null || jobAds === undefined ? (
        <>loading</>
      ) : (
        <SingleCategory Adverts={jobAds.data} />
      )}
    </>
  )
}

export default JobPage
JobPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
