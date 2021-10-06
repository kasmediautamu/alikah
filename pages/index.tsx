import Head from 'next/head'
import Link from 'next/link'
import Ad from '../components/client/Ad'
import CategoryList from '../components/client/CategoryList'
import TopCityList from '../components/client/TopCityList'
import ClientLayout from '../components/client/Layout'
import AutoSlider from '../components/Allslides/Carousel'
import ManualSlider from '../components/Allslides/Slider'
import PromotedAdSlider from '../components/Allslides/PromotedAdSlder'
import s from './Home.module.scss'
import adverts from '../dummyData/adverts.json'
import fetchDating from '../lib/fetcher/dating'
import fetchEducation from '../lib/fetcher/education'
import fetchFashion from '../lib/fetcher/fashion'
import fetchManufucturers from '../lib/fetcher/manufucturers'
import fetchVehicles from '../lib/fetcher/vehicles'
import fetchJobs from '../lib/fetcher/job'
import fetchPPE from '../lib/fetcher/ppe'
import fetchProperty from '../lib/fetcher/property'
import fetchElectronics from '../lib/fetcher/electronics'
import fetchServices from '../lib/fetcher/services'
import SubCategories from '../components/client/SubCategories'

// local data
import dating from '../dummyData/subcategories/dating.json'
import education from '../dummyData/subcategories/education.json'
import electronics from '../dummyData/subcategories/electronics.json'
import fashion from '../dummyData/subcategories/fashion.json'
import job from '../dummyData/subcategories/job.json'
import manufucturers from '../dummyData/subcategories/manufucturers.json'
import ppe from '../dummyData/subcategories/ppe.json'
import property from '../dummyData/subcategories/property.json'
import services from '../dummyData/subcategories/services.json'
import vehicles from '../dummyData/subcategories/vehicles.json'
// data fetching from api
export async function getServerSideProps() {
  const datingAds = await fetchDating()
  const educationAds = await fetchEducation()
  const fashionAds = await fetchFashion()
  const manufuctureAds = await fetchManufucturers()
  const vehicleAds = await fetchVehicles()
  const jobAds = await fetchJobs()
  const ppeAds = await fetchPPE()
  const propertyAds = await fetchProperty()
  const electronicsAds = await fetchElectronics()
  const servicesAds = await fetchServices()

  return {
    props: {
      datingAds,
      educationAds,
      fashionAds,
      manufuctureAds,
      vehicleAds,
      jobAds,
      ppeAds,
      propertyAds,
      electronicsAds,
      servicesAds,
      revalidate: 24 * 60 * 60, //24 hours
    },
  }
}

export default function Home({
  datingAds,
  educationAds,
  fashionAds,
  manufuctureAds,
  vehicleAds,
  jobAds,
  ppeAds,
  propertyAds,
  electronicsAds,
  servicesAds,
}) {
  // console.log(servicesAds)
  // console.log(datingAds.data)
  const spreadAll = [
    ...servicesAds.data,
    ...datingAds.data,
    ...electronicsAds.data,
    ...propertyAds.data,
    ...ppeAds.data,
    ...jobAds.data,
    ...vehicleAds.data,
    ...fashionAds.data,
    ...educationAds.data,
    ...manufuctureAds.data
  ]
  console.log(vehicleAds)
  const sliderAdverts = adverts.map((advert) => {
    return advert
  })

  return (
    <div className="container-fluid">
      <Head>
        <title>Alikah Ads</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" type="text/css"  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}

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
              <Link href={`/sponsored`}>
                <p className={s.viewSponsored}>View all</p>
              </Link>
            </div>
            <AutoSlider sponsoredAds={datingAds.data} />

          </div>
          <Link href="/">
            <p className={s.datePosted}>Trending Ads</p>
          </Link>
          <div className={s.givenDate}>
          <ManualSlider adverts={datingAds.data} />
          </div>
          {/* sub categories*/}
          <p className={s.datePosted}>All Sub Categories</p>
          <div className={s.subcategories}>
            <SubCategories category={`Dating`} dataList={dating.dating} to={`/dating`}/>
            <SubCategories category={`Education`} dataList={education.Education} to={`/education`}/>
            <SubCategories category={`Fashion`} dataList={fashion.fashion} to={`/fashion`}/>
            <SubCategories category={`Local Manufucturers`} dataList={manufucturers.localManufacturers} to={`/manufucturers`}/>
            <SubCategories category={`PPE & Covid Serivces`} dataList={ppe.ppe} to={`/ppe`}/>
            <SubCategories category={`Property`} dataList={property.property} to={`/property`}/>
            <SubCategories category={`Vehicles`} dataList={vehicles.vehicles} to={`/vehicles`}/>
            <SubCategories category={`Electronics & Accessories`} dataList={electronics.electronics} to={`/electronics`} />
            <SubCategories category={`Jobs`} dataList={job.jobs} to={`/jobs`}/>
            <SubCategories category={`Services`} dataList={services.services} to={`/services`}/>
          </div>
        </div>
        <div className={s.rightSidebar}>
          <div className={s.happening}>
            <p className={s.happenigTitle}>What's trending at Alikah?</p>
            <p className={s.dating}>
              Freeonline Dating in SouthAfrica, Zimbabwe, Zambia & more. Meet, Chat & have fun with
              our dating feature.
            </p>
          </div>
          <div className={s.latestAd}>
            <p className={s.latestTitle}>Promoted Ads</p>
            <PromotedAdSlider adverts={datingAds.data} />
          </div>
          <div className={s.alikahPermanentAd}>
            <img src="./images/alikah-brand-ad.png" alt="alikah-brand advert" />
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
/**
 * https://stackoverflow.com/questions/60060544/page-refresh-break-styles-on-nextjs-production-app
 * https://stackoverflow.com/questions/66587775/preloading-a-css-file-with-nextjs
 */
