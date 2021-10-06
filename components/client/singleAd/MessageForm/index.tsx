import * as React from 'react'
import Button from '../../FormFields/Button'
import TextAreaField from '../../FormFields/Textarea'

const MessageForm =({onchange, onclick})=>{
  return (
    <>
    <TextAreaField
    label={`Message*:`}
    textareaName={`message`}
     placeholder={`Enter Message`}
     changefunction={onchange}
    />
    <Button type="button" onClick={onclick}>Send</Button>
    </>
  )
}
export default MessageForm
