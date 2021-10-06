import Link from 'next/link'
import * as React from 'react'
import s from './SubCategories.module.scss'

const SubCategories =({dataList,category, to}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.category}>{category}</div>
      {
        dataList && dataList.map((item)=>{
          return (
            <div key={item}>
              <Link href={to}><p className={s.subcategory}>{item}</p></Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default SubCategories
