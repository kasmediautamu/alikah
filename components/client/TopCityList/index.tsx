import React from "react";
import Link from "next/link";
import s from "./TopCityList.module.scss";

const TopCityList = () => {
  const CityList = [
    { title: "Alice", link: "/" },
    { title: "Butterworth", link: "/" },
    { title: "East London", link: "/" },
    { title: "Graaff-Reinet", link: "/" },
    { title: "Grahamstown", link: "/" },
    { title: "King William’s Town", link: "/" },
    { title: "Mthatha", link: "/" },
    { title: "Port Elizabeth", link: "/" },
    { title: "Queenstown", link: "/" },
    { title: "Zwelitsha", link: "/" },
    { title: "Free State", link: "/" },
  ];
  return (
    <div className={s.topCityList}>
      <p className={s.topCityListTitle}>Top Cities</p>
      <div className={s.cities} >
        {CityList &&
          CityList.map((city) => {
            return <Link key={city.title} href={city.link}>{city.title}</Link>;
          })}
      </div>
    </div>
  );
};

export default TopCityList;
