import React,{ useState } from 'react'
import Step1Form from './Step1'
import s from './CreateAd.module.scss'
import Step2Form from './Step2'

const CreateAd = () => {
  const [tab, setTab] = useState('Step 1')
  return (
    <div className={s.newAd}>
      <div className={s.newAdHeader}>
        <p>Post Ad</p>
        <p>Reset</p>
      </div>
      <div className={s.tabs}>
        <p onClick={() => setTab('Step 1')}>Step 1: About Ad</p>
        <p onClick={() => setTab('Step 2')}>Step 2: Ad Details</p>
      </div>
      <div className="content">
        {tab === 'Step 1' && <><Step1Form /></>}
        {tab === 'Step 2' && <><Step2Form /></>}
      </div>
    </div>
  )
}

export default CreateAd
