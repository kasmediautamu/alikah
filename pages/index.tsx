import Head from "next/head";
import Link from 'next/link'
import clientPromise from "../lib/mongodb";
import Ad from "../components/Ad";
import CategoryList from "../components/CategoryList";
import TopCityList from "../components/TopCityList";
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
          <Link href='/'><p className={s.datePosted}>Wednesday, 23 August 2021</p></Link>
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
          <Link href='/'><p className={s.datePosted}>Tuesday, 22 August 2021</p></Link>
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
          <Link href='/'><p className={s.datePosted}>Monday, 21 August 2021</p></Link>
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

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}
