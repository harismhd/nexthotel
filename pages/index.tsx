import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// Styles
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Employee List | Home</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div>
        <div className={styles.background}>
          <h1 className={styles.title}>TOP 10 RESTAURANTS IN CALICUT</h1>
          <p className={styles.text}>
            Nestled along the picturesque coastline of Kerala, Kozhikode,
            formerly known as Calicut, is not only renowned for its rich history
            and scenic beauty but also for its vibrant culinary scene. With
            influences from Malabar's diverse cultural heritage, the restaurants
            in Kozhikode offer a captivating fusion of flavors that will
            tantalize the taste buds of any discerning food enthusiast.
          </p>
          <Link href="/employee">
            <a className={styles.btn}>See Restaurant Listing</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
