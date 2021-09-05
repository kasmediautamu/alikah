import React from 'react'
import s from './Layout.module.scss'
const DashboardLayout = ({children}) => {
 return (
<div className={s.dashboardLayout}>
  {children}
</div>
 )
}

export default DashboardLayout
