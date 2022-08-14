import type { NextPage } from 'next';
import Head from 'next/head';
import LoginBackground from '../ui/LoginBackground';
import LoginForm from '../ui/LoginForm';
import LoginTitle from '../ui/LoginTitle';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gate | Welcome</title>
        <meta name="description" content="SoR individual and private website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginBackground />
      <LoginTitle />
      <LoginForm />
    </>
  );
};

export default Home;
