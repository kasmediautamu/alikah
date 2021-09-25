import React from 'react'
import ClientLayout from '../components/client/Layout'
import SingleAd from '../components/client/singleAd'

const SingleAdvertPage = () => {
  return (
    <>
    <SingleAd />
    </>
  )
}

export default SingleAdvertPage
SingleAdvertPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
