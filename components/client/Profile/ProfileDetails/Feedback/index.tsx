import React from 'react'
import s from './Feedback.module.scss'

/*
 * @returns chat/feedback
 */
const Feedback = () => {
  return (
    <div className={s.feedback}>
      <div className={s.feedbackHeader}>
        <p className={s.titleFeedBack}>Feedback</p>
        <div className={s.feebbackTabs}>
          <p><img src="./icons/alikah-ads-inbox-icon.svg" alt="alikah-ads-inbox-icon" /> Recieved(0)</p>
          <p><img src="./icons/alikah-ads-sent-icons.svg" alt="alikah-ads-sent-icon" /> Sent(0)</p>
        </div>
      </div>
      <div className={s.feedbackContent}>
      <img src="./illustrations/alikah-ads-chat-illustration.svg" alt="active ads" />
      <p>There is no Feedback yet.</p>
      <p>Ask your customers leave feedback about you.</p>
      <p>Copy the link and send them.</p>
    </div>
    </div>
  )
}

export default Feedback
