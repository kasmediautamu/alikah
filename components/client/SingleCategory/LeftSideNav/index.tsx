import Link from 'next/link'
import React from 'react'
import s from './LeftSideNav.module.scss'

const LeftSideNav = () => {
  return (
    <div className={s.leftsidenav}>
      <div className={s.applyfilters}>
        <div className={s.head}>
          <p className={s.title}>Apply Filters</p>
          <p className={s.resetbtn}>
            Clear All <img src="./icons/close.svg" alt="" />
          </p>
        </div>
        <div className={s.content}>
          <p className={s.title}>Category</p>
          <p className={s.subtitle}>All Categories</p>
          <div className={s.categorieslist}>
            <p className={s.categoryname}>
              Pets <small>(6209)</small>
            </p>
            <ul className={s.list}>
              <li>
                <p>
                  Pet Accessories <span>(620)</span>
                </p>
              </li>
              <li>
                <p>
                  Livestock & Poultry <span>(1292)</span>
                </p>
              </li>
              <li>
                <p>
                  Other Pets <span>(628)</span>
                </p>
              </li>
              <li>
                <p>
                  Fish<span>(1292)</span>
                </p>
              </li>
              <li>
                <p>
                  Pet Accessories <span>(620)</span>
                </p>
              </li>
              <li>
                <p>
                  Livestock & Poultry <span>(1292)</span>
                </p>
              </li>
              <li>
                <p>
                  Dogs & Puppies <span>(6294)</span>
                </p>
              </li>
              <li>
                <p>
                  Horses & Ponies<span>(264)</span>
                </p>
              </li>
            </ul>
            <p className={s.viewmorebtn}>
              View More <img src="/icons/downarrow.svg" alt="view more" />
            </p>
          </div>
          <div className={s.content}>

              <p className={s.location}>Location</p>
              <div className={s.citylist}>
              <p className={s.categoryname}>
                South Africa <small>(6209)</small>
              </p>
              <ul className={s.list}>
                <li>
                  <p>
                    Western Cape<span>(620)</span>
                  </p>
                </li>
                <li>
                  <p>
                    Gauteng <span>(1292)</span>
                  </p>
                </li>
                <li>
                  <p>
                    Kwazulu-Natal <span>(628)</span>
                  </p>
                </li>
                <li>
                  <p>
                    Eastern Cape<span>(1292)</span>
                  </p>
                </li>
                <li>
                  <p>
                    North State<span>(620)</span>
                  </p>
                </li>
                <li>
                  <p>
                    Mpumulanga <span>(1292)</span>
                  </p>
                </li>
              </ul>
              <Link href={`#`}>
              <p className={s.viewmorebtn}>
                View More <img src="/icons/downarrow.svg" alt="view more" />
              </p>
              </Link>
            </div>
            <div className={s.content}>
              <div className={s.head}>
              <p className={s.price}>Price </p>
              <img src="/icons/downarrow.svg" alt="view more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LeftSideNav
