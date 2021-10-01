import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import ClientLayout from '../components/client/Layout'
import Auth from '../components/client/Login'


const Login = () => {
  return (
    <div>
      {/* <Head>
        <title>Alikah Ads</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://apis.google.com/js/api.js" ></script>
      </Head> */}
      <Auth />

    </div>
  )
}

export default Login

Login.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
