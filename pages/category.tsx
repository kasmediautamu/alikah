import React from 'react'
import ClientLayout from '../components/client/Layout'
import SingleCategory from '../components/client/SingleCategory'


const SingleCategoryPage = () => {
  return (
    <>
    <SingleCategory />
    </>
  )
}

export default SingleCategoryPage
SingleCategoryPage.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
