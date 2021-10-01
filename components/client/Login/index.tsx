import * as React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import TextField from '../FormFields/TextField'
import CheckBox from '../FormFields/CheckBox'
import s from './Login.module.scss'
import Button from '../FormFields/Button'
import { useRouter } from 'next/router'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../redux/store'
import { signIn } from '../../../redux/Actions/auth'
import Cookies from 'js-cookie'
import axios from 'axios'
import GoogleAuth from './GoogleAuth'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const initialFormState = {
  email: '',
  password: '',
}

const Auth = () => {
  const router = useRouter()
  const { redirect }: any = router.query
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialFormState)
  const { email, password } = formData
  const userInfo  = useAppSelector((state: any) => state.sign_in.userInfo)


  // useEffect(() => {
  //   if (userInfo) {
  //     console.log(Cookies.get('userInfo'))
  //     router.push('/')
  //   }
  // }, [])
  const submittedForm = {
    email: email,
    password: password,
  }
  const onchange = (e: any) => {
    let target = e.target
    setFormData({ ...formData, [target.name]: target.value })
  }
  const onsubmit = async (e: any) => {
    e.preventDefault()
    setFormData({ ...formData })
    console.log({ submittedForm })
    try {
      const { data } = await axios.post('/api/user/login', {
        ...submittedForm,
      })
      // console.log(data)
      dispatch(signIn(data))
      Cookies.set('userInfo', data)
      router.push(redirect || '/')

    } catch (err) {
      // enqueueSnackbar(getError(err), { variant: 'error' });
    }
  }

  /**gmail,twitter,facebook login */
  const gmailLogin = async () => {
    // clientID:541327257395-0mhksi311563rji6ekbl1pfjq5nec1kr.apps.googleusercontent.com
    //clientSecret:rO2ux4FNhbAhOLJEU6f-rD9w

  }



  return (
    <>
      <div className={s.auth}>
        <form onSubmit={onsubmit} className={s.form}>
          <p className={s.loginTitle}>Log in</p>
          <div className={s.field}>
            <TextField label="Email" fieldname={'email'} changefunction={onchange} />
          </div>
          <div className={s.field}>
            <TextField
              type="password"
              label="Password"
              fieldname={'password'}
              changefunction={onchange}
            />
          </div>
          <div className={s.field}>
            <CheckBox label="Stay logged in" />
          </div>
          <div className="registrationLinkBtn">
            <Button type="submit">Continue</Button>
          </div>
        </form>
        <div className={s.socialLogin}>
          <p className={s.socialhead}>OR</p>
          <div className={s.registrationLinkBtn}>
            <Link href="/my-account">
              <Button
                onClick={() => {
                  console.log('logged in')
                }}
              >
                Continue with facebook
              </Button>
            </Link>
          </div>
          <div className={s.registrationLinkBtn}>
            {/* <Link href="/my-account">
              <Button
                onClick={() => {
                  console.log('logged in')
                }}
              >
                Continue with gmail
              </Button>
            </Link> */}
            <GoogleAuth />
          </div>
          <div className={s.registrationLinkBtn}>
            <Link href="/my-account">
              <Button
                onClick={() => {
                  console.log('logged in')
                }}
              >
                Continue with Twitter
              </Button>
            </Link>
          </div>
        </div>
        <div className={s.registrationLink}>
          <p className={s.registrationLinkTitle}>First Time On Alikah</p>
          <p className={s.registrationLinkDesc}>
            You can take advantage of Alikah features by Managing and Editing Ads easily, Reading
            and replying to your mesages any time. And By access your best ads anytime wherever you
            are. All these services are free at Alikah.
          </p>
          <div className="registrationLinkBtn">
            <Link href="/register">
              <Button>Register Here</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
