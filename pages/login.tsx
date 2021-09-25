import Link from 'next/link'
import React from 'react'
import ClientLayout from '../components/client/Layout'
import Auth from '../components/client/Login'

const Login = () => {
  return (
     <div><Auth /></div>

  )
}

export default Login

Login.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}
