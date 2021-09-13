import Head from "next/head";
import Link from 'next/link'
import db from "../lib/mongodb";
import Ad from "../components/client/Ad";
import CategoryList from "../components/client/CategoryList";
import TopCityList from "../components/client/TopCityList";
import ClientLayout from '../components/client/Layout'
import s from "./Home.module.scss";
export default function Home({ isConnected }) {
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
          <Link href='/'><p className={s.datePosted}>Trending Ads</p></Link>
          <div className={s.givenDate}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
          </div>
          <div className={s.givenDate}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
          </div>
          <div className={s.givenDate}>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
            <div className={s.adContainer}>
              <Ad />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Layout
Home.getLayout = (page) => {
  return(
      <ClientLayout>
          { page }
      </ClientLayout>
  )
}

export async function getServerSideProps() {
   await db.dbConnect();

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: { },
  };
}
