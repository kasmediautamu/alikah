import React from 'react'
import s from './ImageSlider.module.scss'
import { useSelector,TypedUseSelectorHook } from 'react-redux'
import type { RootState} from '../../../../redux/store'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const ImageSlider = () => {
  const { title,price,imageURL }  = useAppSelector((state: any) => state.singleadvert.singleadvert)
  return (
    <div className={s.imageSliderWrapper}>
      <div className={s.head}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>R {price}</p>
      </div>
      <div className={s.imageWrapper}>
        <img src={imageURL[0]} alt={title} />
      </div>
    </div>
  )
}
export default ImageSlider
