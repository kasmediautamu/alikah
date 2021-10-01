import ClientLayout from '../components/client/Layout'
import Profile from '../components/client/Profile';
import { useRouter } from 'next/router'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { useEffect } from "react"
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const UserAccount = () => {
  const router = useRouter()
  const { userInfo } = useAppSelector((state: any) => state.sign_in)
  console.log(userInfo)
  useEffect(()=>{
    if(!userInfo){
      router.push('/login')
    }
  }, [])
    return (
        <div><Profile /></div>
    )
}

export default UserAccount
// Layout
UserAccount.getLayout = (page) => {
  return(
      <ClientLayout>
          { page }
      </ClientLayout>
  )
}
