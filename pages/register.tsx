import ClientLayout from '../components/client/Layout'
import Registration from '../components/client/Registration';
const Register = () => {
    return (
        <div><Registration /></div>
    )
}

export default Register
Register.getLayout = (page) => {
  return(
      <ClientLayout>
          { page }
      </ClientLayout>
  )
}
