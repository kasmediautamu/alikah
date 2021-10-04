import React, { useEffect } from 'react'
import AdminDetails from '../../components/dashboard/AdminDetails'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../redux/store'
import axios from 'axios'
import { setNav } from '../../redux/Actions/auth'
import DashboardLayout from '../../components/dashboard/Layout'
const Admin = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setNav('admin'))
  }, [])
  return (
    <>
      <AdminDetails />
    </>
  )
}

export default Admin

// Layout
Admin.getLayout = (page) => {
  return(
      <DashboardLayout>
          { page }
      </DashboardLayout>
  )
}
