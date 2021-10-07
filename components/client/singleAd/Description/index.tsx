import React, { useEffect } from 'react'
import s from './Description.module.scss'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState} from '../../../../redux/store'
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const Description = () => {
  const {description}  = useAppSelector((state: any) => state.singleadvert.singleadvert)

  return (
    <div className={s.adDescription}>
      <p className={s.title}>Description</p>
      <p className={s.details}>
        {description}
      </p>
    </div>
  )
}

export default Description
