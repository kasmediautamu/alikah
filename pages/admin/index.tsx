import React from 'react'
import AdminDetails from '../../components/dashboard/AdminDetails'
import DashboardLayout from '../../components/dashboard/Layout'
const Admin = () => {
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
