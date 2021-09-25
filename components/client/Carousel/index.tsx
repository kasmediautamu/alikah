import React from 'react'
import Carousel from 'react-material-ui-carousel';
import NextLink from 'next/link';
import Link from 'next/link';
import s from './Carousel.module.scss'
const AdSlider = ({sponsoredAds}:any) =>{
  return (
    <div>
      <Carousel className={s.carouselSize} animation="slide">
        {sponsoredAds && sponsoredAds.map((sponsoredAdvert) => (
          <NextLink
            key={sponsoredAdvert.id}
            href={`/}`}
            passHref
          >
            <Link href={`/`} >
              <div className={s.sliderImageWrapper}>
              <img
                src={sponsoredAdvert.imageURL[0]}
                alt={sponsoredAdvert.name}
                className={''}
              ></img>
              </div>
            </Link>
          </NextLink>
        ))}
      </Carousel>
    </div>
  )
}
export default AdSlider
