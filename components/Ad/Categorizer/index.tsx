import React from 'react'
import Link from 'next/link'
import s from './Categorizer.module.scss';
interface ICategorizer {
    category:string,
    subCategory?:string,
    link?:string,
    itemName:string
}

const Categorizer = ({category,subCategory,itemName,link}:ICategorizer) => {
    return (
        <div className={s.categorizer}>
            <Link href={link}>{category}</Link>
            <img src='./icons/right-arrow.svg' alt="alikah classified ads category" />
            <Link href={link}>{subCategory}</Link>
            <img src='./icons/right-arrow.svg' alt="alikah classified ads category" />
            <Link href={link}>{itemName}</Link>
        </div>
    )
}

export default Categorizer