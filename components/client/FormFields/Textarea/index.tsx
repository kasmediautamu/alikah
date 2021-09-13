import React from 'react'
import s from './Textarea.module.scss'
interface ITextAreaProps {
  placeholder?: string
  textareaName?: string
  changefunction?: any
  label?:string
  	/**
	 * A message error
	 */
	error?: string;
}
const TextAreaField: React.FC<ITextAreaProps> = (props: ITextAreaProps) => {
  const { label,textareaName, placeholder, changefunction, error } = props
  return (
    <>
      <div className={s.Label}>{label}</div>
      <textarea name={textareaName} placeholder={placeholder} onChange={changefunction} />
      {error && <div className={s.errorMessage}>{error}</div>}
    </>
  )
}
export default TextAreaField
