import React from 'react'
import s from './AdminDetails.module.scss'

const AdminDetails = () => {
  return (
    <div className={s.adminContent}>
      <div className={s.left}>
        side nav
      </div>
      <div className={s.right}>
        content area
      </div>
    </div>
  )
}

export default AdminDetails
