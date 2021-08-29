import Link from "next/link";
import { useState } from "react";
import DropdownSelect from "../FormFields/Select";
import s from "./Nav.module.scss";

const Nav = () => {
  const [City, setCity] = useState<string>("");
  function PostAdButton() {
    return (
      <div className={s.btnWrapper}>
        <img src="/icons/add-post.svg" alt="Alikah add post icon" />
        <Link href="/post-ad">Post free Ad</Link>
      </div>
    );
  }
  function CountryCollection() {
    return (
      <>
        South Africa
        <DropdownSelect
          items={["Pretoria", "Soweto", "Bloemfonteim"]}
          value={City === "" ? "Select City" : City}
          onChange={(value: string) => {
            setCity(value);
          }}
        />
      </>
    );
  }
  return (
    <nav className={s.nav}>
      <ul className={s.left}>
        <li className={`${s.navItem} ${s.logo}`}>
          <Link href="/">Alikah Ads</Link>
        </li>
        <li className={s.navItem}>South Africa</li>
        <li className={s.navItem}>
          <DropdownSelect
          items={["Pretoria", "Soweto", "Bloemfonteim"]}
          value={City === "" ? "Select City" : City}
          onChange={(value: string) => {
            setCity(value);
          }}
        /></li>
        
      </ul>
      <ul className={s.right}>
        <li className={s.navItem}>
          <Link href="/account">Favourite Ads</Link>
        </li>
        <li className={`${s.navItem} ${s.addPostBtn}`}>
          <PostAdButton />
        </li>
        <li className={s.navItem}>
          <Link href="/account">My Account</Link>
        </li>
        <li className={s.navItem}>|</li>
        <li className={s.navItem}>
          <Link href="/login">Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
