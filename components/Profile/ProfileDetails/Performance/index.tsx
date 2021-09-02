import React from 'react'
import CheckBox from '../../../FormFields/CheckBox'
import s from './Performance.module.scss'

/*
 * @returns Performance analytics for the user
 */
const Performance = () => {
  return (
    <div className={s.performance}>
      <div className={s.performanceHeader}>
        <p className={s.titlePerformance}>Performance</p>
        <div className={s.criteria}>
        <CheckBox label="Visitors"/>
        <CheckBox label="Phone Views"/>
        <CheckBox label="Chat requests"/>
        </div>
      </div>
      <div className={s.PerformanceContent}>
      {/* performance chart goes here */}

    </div>
    </div>
  )
}

export default Performance
