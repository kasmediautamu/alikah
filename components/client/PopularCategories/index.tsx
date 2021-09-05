import React from 'react'
import s from  './PopularCategories.module.scss'
interface Category {
    icon:any,
    title:string
}



const Category = () => {
    const Categories = [
        { icon:'/icons/alikah-ads-education-icon.svg', title:'Education'},
        { icon:'/icons/alikah-ads-love-icon.svg', title:'Dating'},
        { icon:'/icons/alikah-ads-community-icon.svg', title:'Community'},
        { icon:'/icons/alikah-ads-jobs-icon.svg', title:'Jobs'},
        { icon:'/icons/alikah-ads-for-sale-icon.svg', title:'For Sale'},
        { icon:'/icons/alikah-ads-property-icon.svg', title:'Property'},
        { icon:'/icons/alikah-ads-services-icon.svg', title:'Services'},
        { icon:'/icons/alikah-ads-events-icon.svg', title:'Events'},
    ]
    return (
    <div className={s.categories}>
    { Categories && Categories .map((category)=>{
        return (
            <div className ={s.card} key={category.title}>
            <p>{category.title}</p>
            </div>
        )
    })}
    </div>
    )
}

export default Category
