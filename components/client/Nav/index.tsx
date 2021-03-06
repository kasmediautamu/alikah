import NextLink from 'next/link'
import Link from 'next/link'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../redux/store'
import { useEffect, useState } from 'react'
import DropdownSelect from '../FormFields/Select'
import Banner from '../Banner'
import s from './Nav.module.scss'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const Nav = () => {
  const navdisplay = useAppSelector((state: any) => state.sign_in.userNav)
  const [nav, setNav] = useState('client')
  const [Country, setCountry] = useState<string>('South Africa')
  useEffect(()=>{
    if(navdisplay==='admin'){
      setNav('admin')
    }

  },[])
  function PostAdButton() {
    return (
      <div className={s.btnWrapper}>
        <Link href="/create-free-ad">Post free Ad</Link>
      </div>
    )
  }

  function CountryCollection() {
    return (
      <>
        {/* country */}
        {/* <DropdownSelect
          items={["Pretoria", "Soweto", "Bloemfonteim"]}
          value={City === "" ? "Select City" : City}
          onChange={(value: string) => {
            setCity(value);
          }}
        /> */}
      </>
    )
  }
  return (
    <>
          <nav className={s.nav}>
            <ul className={s.left}>
              <li className={`${s.navItem} ${s.logo}`}>
                <NextLink href={`/`} passHref>
                  <Link href="/">a</Link>
                </NextLink>
              </li>
              <li className={s.navItem}>{Country && Country}</li>
              <li className={s.navItem}>
                <DropdownSelect
                  items={['South Africa', 'Swaziland', 'Namibia', 'Zimbabwe', 'Malawi', 'Botswana']}
                  value={Country === '' ? 'Select Country' : Country}
                  onChange={(value: string) => {
                    setCountry(value)
                  }}
                />
              </li>
              <li>
                <Banner />
              </li>
            </ul>
            <ul className={s.right}>
              <li className={`${s.navItem} ${s.addPostBtn}`}>
                <PostAdButton />
              </li>
              <li className={s.navItem}>

                  <>
                    {' '}
                    <Link href="/account">My Account</Link>
                  </>

              </li>
              <li className={s.navItem}>|</li>
              <li className={s.navItem}>

                  <>
                    <Link href="/login">Login/Register</Link>
                  </>

              </li>
            </ul>
          </nav>
        </>


  )
}
export default Nav
