import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack'
import Cookies from 'js-cookie'
import TextField from '../FormFields/TextField'
import Button from '../FormFields/Button'
import s from './Registration.module.scss'
import { useRouter } from 'next/router'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../redux/store'
import axios from 'axios'
import { signIn } from '../../../redux/Actions/auth'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const initialFormState = {
  username: '',
  email: '',
  password: '',
  comfirmPassword: '',
  phoneNumber: '',
}
const Registration = () => {
  // const {handleSubmit, control, formState: { errors }} = useForm()
  const [formData, setFormData] = useState(initialFormState)
  const { username, email, password, comfirmPassword, phoneNumber } = formData
  const submittedForm = {
    username: username,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
  }
  const onchange = (e: any) => {
    let target = e.target
    setFormData({ ...formData, [target.name]: target.value })
  }
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const router = useRouter()
  const { redirect }: any = router.query
  const { userInfo } = useAppSelector((state: any) => state.sign_in)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   if(userInfo){
  //     router.push('/')
  //   }
  // }, [])

  const onsubmit = async (e: any) => {
    e.preventDefault()
    setFormData({ ...formData })
    console.log({ submittedForm })
    try {
      const { data } = await axios.post('/api/user/register', {
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

  // const submitHandler = async (e:any) => {
  //   e.preventDefault()
  //   setFormData({ ...formData })
  //   console.log(submittedForm)

  // try {
  //   const { data } = await axios.post('/api/user/register', {
  //     ...submittedForm
  //   });
  //   // console.log(data)
  //   dispatch(signIn(data))
  //   Cookies.set('userInfo', data);
  //   router.push(redirect || '/');
  // } catch (err) {
  //   // enqueueSnackbar(getError(err), { variant: 'error' });
  // }
  // };

  return (
    <div className={s.registration}>
      <div className={s.registrationTitle}>
        <p className={s.title}>Register on Alikah Ads for Free </p>
        <p className={s.description}>Enter your Email Address below</p>
      </div>
      <form onSubmit={onsubmit} className={s.formRegistration}>
        <TextField type="text" fieldname={'username'} label="User name" changefunction={onchange} />
        <TextField type="email" fieldname={'email'} label="Email" changefunction={onchange} />
        <TextField
          type="text"
          fieldname={'phoneNumber'}
          label="Phone Number"
          changefunction={onchange}
        />
        <TextField
          type="password"
          fieldname={'password'}
          label="Password"
          changefunction={onchange}
        />
        <TextField
          type="password"
          fieldname={'comfirmPassword'}
          label="Comfirm Password"
          changefunction={onchange}
        />
        <div className={s.submitBtn}>
          <Button type="submit">Register Here</Button>
        </div>
      </form>
    </div>
  )
}

export default Registration
