import ClientLayout from '../components/client/Layout'
import CreateAd from '../components/client/CreateAd'
const PostAd = () => {

    return (
        <div><CreateAd /></div>
    )
}

export default PostAd

// Layout
PostAd.getLayout = (page) => {
  return(
      <ClientLayout>
          { page }
      </ClientLayout>
  )
}
