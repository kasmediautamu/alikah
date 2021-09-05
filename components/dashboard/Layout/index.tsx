import React from 'react'
import Nav from '../Nav'
import s from './Layout.module.scss'
const DashboardLayout = ({children}) => {
 return (
<div className={s.dashboardLayout}>
  <Nav />
  <div className={s.content}>
       {children}
  </div>
</div>
 )
}

export default DashboardLayout
