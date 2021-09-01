import React from 'react'
import s from './Activity.module.scss'

type IProps = {
  onSetView : any   //should be clined out for right prop types
  activeView : any
}

const Activity = ({onSetView, activeView}: IProps) => {

  return (
    <div className={s.activity}>
      <div className={s.activityHeader}>
        <div className={s.tabBTN} onClick={()=> onSetView('Active')}>
          <img src="./icons/alikah-ads-active-icon.svg" alt="alikah-ads-active-icon" />
          <p>Active({'0'})</p>
        </div>
        <div className={s.tabBTN} onClick={()=> onSetView('Reviewing')}>
          <img src="./icons/alikah-ads-reviewing-icon.svg" alt="alikah-ads-reviewing-icon" />
          <p>Reviewing({'0'})</p>
        </div>
        <div className={s.tabBTN} onClick={()=> onSetView('Declined')}>
          <img src="./icons/alikah-ads-declined-icon.svg" alt="alikah-ads-declined-icon" />
          <p>Declined({'0'})</p>
        </div>
        <div className={s.tabBTN} onClick={()=> onSetView('Drafts')}>
          <img src="./icons/alikah-ads-draft-icon.svg" alt="alikah-ads-draft-icon" />
          <p>Draft({'0'})</p>
        </div>
        <div className={s.tabBTN} onClick={()=> onSetView('Closed')}>
          <img src="./icons/alikah-ads-closed-icon.svg" alt="alikah-ads-closed-icon" />
          <p>Closed({'0'})</p>
        </div>
        <div className={s.tabBTN} onClick={()=> onSetView('All')}>
          <img src="./icons/alikah-ads-all-icon.svg" alt="alikah-ads-all-icon" />
          <p>All({'0'})</p>
        </div>
      </div>
    </div>
  )
}

export default Activity
