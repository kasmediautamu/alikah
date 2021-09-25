import React from "react";
import Link from "next/link";
import s from "./TopCityList.module.scss";

const TopCityList = () => {
  const CityList = [
    { title: "Alice", link: "/category" },
    { title: "Butterworth", link: "/category" },
    { title: "East London", link: "/category" },
    { title: "Graaff-Reinet", link: "/category" },
    { title: "Grahamstown", link: "/category" },
    { title: "King William’s Town", link: "/category" },
    { title: "Mthatha", link: "/category" },
    { title: "Port Elizabeth", link: "/category" },
    { title: "Queenstown", link: "/category" },
    { title: "Zwelitsha", link: "/category" },
    { title: "Free State", link: "/category" },
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
