import Head from "next/head";
import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <Head>
        <title>Employee List | About</title>
        <meta name="keywords" content="employees" />
      </Head>

      <div className="about">
        <h1>About</h1>
        <p>
          Welcome to Calicut s premier destination for discovering the top
          culinary hotspots in the city! At Calicut Eats, we are passionate
          about celebrating the vibrant food culture that defines this beautiful
          coastal city. Our mission is to be your trusted guide, helping you
          explore the diverse and delicious dining experiences that Calicut has
          to offer. With so many dining options available in Calicut, choosing
          where to eat can be overwhelming. That s where we come in. Our
          meticulously curated list of the top 10 restaurants ensures that you
          experience the very best that Calicut has to offer, whether you re a
          local.
        </p>
      </div>
    </>
  );
};

export default About;
