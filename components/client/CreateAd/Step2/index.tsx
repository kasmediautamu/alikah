import React, { useState } from 'react'
import Button from '../../FormFields/Button'
import s from './Step2.module.scss'

const Step2Form = () => {
  const [subscription, setSubscription] = useState<string>('Standard Ad')

    // let F = {title:'hi'}
    // const formData = {F,subscription}
    // console.log(formData)
  return (
    <form className={s.step2Form}>
      {/* holds forms depending on category */}
      <div className={s.monetization}>
        <div className={s.titleMonetization}>
          <p>Promote your ad</p>
          <p>Please, choose one of the following options to post your ad</p>
        </div>
        <div className={s.field} onClick={()=>setSubscription('Standard Ad')}>
          <div className={s.subscriptionHead}>
            <p className={s.subscriptionTitle}>Standard Ad</p>
          </div>
        </div>
        <div className={s.field} onClick={()=>console.log('field')}>
          <div className={s.subscriptionHead}>
            <p className={s.subscriptionTitle}>Top</p>
            <span>Best Offer</span>
          </div>
          <div className={s.subscriptionPackages}>
            <div>
              <p onClick={()=>console.log('7 days')}>{'7 days'}</p>
              <p onClick={()=>console.log('30 days')}>{'30 days'}</p>
            </div>
            <p>Shs{' '}{'17,000'}</p>
          </div>
        </div>
        <div className={s.field} onClick={()=>console.log('field')}>
          <div className={s.subscriptionHead}>
            <p className={s.subscriptionTitle}>Boost Premium</p>
          </div>
          <div className={s.subscriptionPackages}>
            <div>
              <p onClick={()=>console.log('month')}>{'1 month'}</p>
            </div>
            <p>Shs{' '}{'52,000'}</p>
          </div>
        </div>
        <Button type="submit">Post Ad</Button>
        <p className={s.terms}>
          By clicking on Post Ad, you accept the Terms of Use, confirm that you will abide by the
          Safety Tips, and declare that this posting does not include any Prohibited Items.
        </p>
      </div>
    </form>
  )
}
export default Step2Form
