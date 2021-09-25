import React from 'react'
import s from './GeneralDetails.module.scss'

const GeneralDetails = () => {
  return (
    <div className={s.details}>
    <p className={s.heading}>General Details</p>
    <div className={s.generalDetails}>
      <div className={s.left}>
        <p>
          Location: <span>Montague Gardens,Northern Suburbs</span>
        </p>
        <p>
          Make: <span>BMW</span>
        </p>
        <p>
          Body Type: <span>Other</span>
        </p>
        <p>
          Kilometers: <span>15220</span>
        </p>
        <p>
          Fuel Type: <span>Petrol</span>
        </p>
      </div>
      <div className={s.right}>
      <p>
          For Sale By: <span>Dealer</span>
        </p>
        <p>
          Model: <span>Z4</span>
        </p>
        <p>
          Year: <span>2011</span>
        </p>
        <p>
          Transmission: <span>Automatic</span>
        </p>
      </div>
    </div>
    </div>
  )
}

export default GeneralDetails
