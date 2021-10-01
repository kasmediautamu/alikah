import * as React from 'react'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    gapi:any
  }
}

const GoogleAuth = () => {
  const [googleAuth, setGoogleAuth] = useState<any>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState();

  const onFailure = () => {
    setIsLoggedIn(false);
  }
  const logOut = () => { // (Ref. 8)
    (async() => {
      await googleAuth.signOut();
      setIsLoggedIn(false);

    })();
  };
  useEffect(()=>{
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId:'541327257395-0mhksi311563rji6ekbl1pfjq5nec1kr.apps.googleusercontent.com',
        scope:'profile email'
      }).then(()=>{
        const auth = window.gapi.auth2.getAuthInstance()
        setGoogleAuth(auth)
        onAuthChange(googleAuth.isSignedIn.get())
        googleAuth.isSignedIn.listen(onAuthChange)


        // handle initial sign-in state
        // auth.isSignedIn.get() - return true if logged in
      })
    });
  }
  ,[])
const onAuthChange = (isSignedIn:Boolean)=>{

  if(isSignedIn){
    var user:any | null = googleAuth.currentUser.get().getBasicProfile()
    if(user){
       console.log(user)
       console.log(user.getEmail())
       console.log(user.getName())
       console.log(user.getImageUrl())
    }
    //extra user or make api call
  } else {
    // setIsLoggedIn(null)
    //keep users logged out
    console.log('failed to get user')
  }
  // keep user signed out
}
const onSignClick =  ()=> {
  googleAuth.signIn()
}
const onSignOutClick = async()=> {
   googleAuth.signOut()
}
return (
  <div>
    <button onClick={onSignClick}>sign in with google</button>
    <button onClick={onSignOutClick}>sign out with google</button>
  </div>
)
}

export default GoogleAuth
