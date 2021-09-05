import React from 'react'
import DashboardLayout from '../../components/dashboard/Layout'

const Admin = () => {
  return (
    <div>hi from admin</div>
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
