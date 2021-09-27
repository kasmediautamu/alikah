import React from 'react'
import s from './ValidationMessage.module.scss'
 type Props = {
     children: any
 }
function ValidationMessage( props:Props ) {
    const { children } = props
    return (
        <div className={s.error}>
            {children}
        </div>
    )
}
export default  ValidationMessage
/**
 * {formError && formError.field_id === "userID" ? (
              <ValidationMessage>{formError.message}</ValidationMessage>
          ):("")}
 */
