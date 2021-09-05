import ClientLayout from '../components/client/Layout'
import Profile from '../components/client/Profile';
const UserAccount = () => {
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
