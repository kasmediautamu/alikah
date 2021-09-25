import Head from 'next/head'
import Link from 'next/link'
import db from '../lib/mongodb'
import Ad from '../components/client/Ad'
import CategoryList from '../components/client/CategoryList'
import TopCityList from '../components/client/TopCityList'
import ClientLayout from '../components/client/Layout'
import AdSlider from '../components/client/Carousel'
import Slider from '../components/client/Slider'
import s from './Home.module.scss'
import adverts from '../dummyData/adverts.json'
export default function Home({ isConnected }) {
  const sliderAdverts = adverts.map((advert) => {
    return advert
  })

  return (
    <div className="container-fluid">
      <Head>
        <title>Alikah Ads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <div className={s.left}>
          <CategoryList />
          <TopCityList />
        </div>
        <div className={s.right}>
          {/* Add sponsored ads here */}

          <div className={s.sliderWrapper}>
            <div className={s.titleRow}>
            <p className={s.sliderTitle}>Sponsored Ads</p>
            <Link href={`/sponsored`}><p className={s.viewSponsored}>View all</p></Link>
            </div>

            <Slider adverts={sliderAdverts}/>
          </div>
          <Link href="/">
            <p className={s.datePosted}>Trending Ads</p>
          </Link>
          <div className={s.givenDate}>
            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>
            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>

            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>
            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>
            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>
            <Link href={`/single`}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            </Link>
          </div>
          {/* car deals */}


        </div>
        <div className={s.rightSidebar}>
          <div className={s.happening}>
            <p className={s.happenigTitle}>What's trending at Alikah?</p>
            <p className={s.dating}>
              Freeonline Dating in SouthAfrica, Zimbabwe, Zambia & more. Meet, Chat & have fun with
              our dating feature.
            </p>
          </div>
          <div className={s.alikahPermanentAd}>
            <img src="./images/alikah-brand-ad.png" alt="alikah-brand advert" />
          </div>
          <div className={s.latestAd}>
            <p className={s.latestTitle}>
              Checkout the Latest Ads
            </p>
          <AdSlider sponsoredAds={sliderAdverts} />
          </div>
        </div>
      </main>
    </div>
  )
}

// Layout
Home.getLayout = (page) => {
  return <ClientLayout>{page}</ClientLayout>
}

export async function getServerSideProps() {
  await db.dbConnect()

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: {},
  }
}
