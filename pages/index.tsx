import type { NextPage } from 'next';
import Head from 'next/head';

import LoginBackground from '../ui/LoginBackground';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gate | Welcome</title>
        <meta name="description" content="SoR individual and private website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginBackground />
    </>
  );
};

export default Home;
