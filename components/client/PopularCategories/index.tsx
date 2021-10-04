import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../redux/store'
import { useState } from 'react'
import s from  './PopularCategories.module.scss'
interface Category {
    icon:any,
    title:string
}


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const Category = () => {
  const { userInfo } = useAppSelector((state: any) => state.sign_in)
    const Categories = [
        { icon:'/icons/alikah-ads-education-icon.svg', title:'Education', link:'/education'},
        { icon:'/icons/alikah-ads-love-icon.svg', title:'Dating', link:'/dating'},
        { icon:'/icons/alikah-ads-community-icon.svg', title:'Vehicles',link:'/vehicles'},
        { icon:'/icons/alikah-ads-jobs-icon.svg', title:'Jobs',link:'/jobs'},
        { icon:'/icons/alikah-ads-for-sale-icon.svg', title:'Electronics',link:'/electronics'},
        { icon:'/icons/alikah-ads-property-icon.svg', title:'Property',link:'/property'},
        { icon:'/icons/alikah-ads-services-icon.svg', title:'Services',link:'/services'},
        { icon:'/icons/alikah-ads-events-icon.svg', title:'Fashion',link:'/fashion'},
    ]
    return (
    <div className={s.categories}>
    <>
    { Categories && Categories .map((category)=>{
        return (
            <Link href={category.link} key={category.title}>
            <div className ={s.card} key={category.title}>
            <p>{category.title}</p>
            </div>
            </Link>
        )
    })}
    </>
    </div>
    )
}

export default Category
