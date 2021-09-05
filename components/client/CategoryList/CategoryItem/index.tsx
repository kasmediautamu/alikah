import React, { useRef } from 'react'
import Link from 'next/link'
import { useDetectOutsideClick } from '../../../../hooks/userDetectedOutsideClick'


const CategoryItem = ({items}) =>{
    const {name,links,open} = items
    const dropdownRef = useRef(null)
    const [isOpen,setOpen] = useDetectOutsideClick(dropdownRef, (open))
    const openSideNav = () =>{
        setOpen(!isOpen)
    }
    return (
        <div className="nav__main--item" ref={dropdownRef} onClick={()=>openSideNav()}>
            <p>{name}</p>
           <div className="nav__main--wrapper">
           {isOpen &&
            links.map((link,index)=>{
                const {title,to} = link
                return (
                        <div className="title"  key={index}>
                        <Link href={to}>
                            <p>{title}</p>
                        </Link>
                    </div>
                )
            })
            }
           </div>
           </div>
    )
}
export default CategoryItem
