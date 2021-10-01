import { useEffect, useState } from 'react'
import { loadGoogleScript } from '../../../../lib/GoogleLogin'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../../../../redux/store'
import axios from 'axios'
import { signIn } from '../../../../redux/Actions/auth'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const googleClientId = '541327257395-0mhksi311563rji6ekbl1pfjq5nec1kr.apps.googleusercontent.com'

declare global {
  interface Window {
    gapi: any
    onGoogleScriptLoad: any
  }
}
function GAuth() {
  const router = useRouter()
  const { redirect }: any = router.query
  const { userInfo } = useAppSelector((state: any) => state.sign_in)
  const dispatch = useDispatch()

  const [gapi, setGapi] = useState()
  const [googleAuth, setGoogleAuth] = useState<any>()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [imageUrl, setImageUrl] = useState()
  const [googleId, setGoogleId] = useState<string>('')

  const submittedForm = {
    username: name,
    email: email,
    password: '',
    phoneNumber: '',
    profilePicture: imageUrl,
  }

  // useEffect(()=>{
  //   if(userInfo){
  //     router.push('/')
  //   }

  // }, [])
  const onSuccess = async (googleUser) => {
    setIsLoggedIn(true)
    const profile = googleUser.getBasicProfile()
    setName(profile.getName())
    setEmail(profile.getEmail())
    setImageUrl(profile.getImageUrl())
    setGoogleId(profile.getId())
    console.log(profile.getId())
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

  const onFailure = () => {
    setIsLoggedIn(false)
  }

  const logOut = () => {
    ;(async () => {
      await googleAuth.signOut()
      setIsLoggedIn(false)
      renderSigninButton(gapi)
    })()
  }

  const renderSigninButton = (_gapi) => {
    // (Ref. 6)
    _gapi.signin2.render('google-signin', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: onSuccess,
      onfailure: onFailure,
    })
  }

  useEffect(() => {
    // Window.gapi is available at this point
    window.onGoogleScriptLoad = () => {
      const _gapi = window.gapi
      setGapi(_gapi)

      _gapi.load('auth2', () => {
        ;(async () => {
          const _googleAuth = await _gapi.auth2.init({
            client_id: googleClientId,
          })
          setGoogleAuth(_googleAuth)
          renderSigninButton(_gapi)
        })()
      })
    }

    // Ensure everything is set before loading the script
    loadGoogleScript()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn && <div id="google-signin"></div>}

        {isLoggedIn && (
          <div>
            <button className="btn-primary" onClick={logOut}>
              Log Out
            </button>
          </div>
        )}
      </header>
    </div>
  )
}

export default GAuth
