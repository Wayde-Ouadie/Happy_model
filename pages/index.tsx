import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useI18n } from 'helpers/hooks';

import { NextSeo } from 'next-seo';

import LandingPage from 'components/landingPage';
import { AnimationConf } from 'components/layout';

import { useRouter } from "next/router";
import HeadSeo from 'components/HeadSeo';
 
const Home: NextPage = () => {
  const router = useRouter();
  const { head } = useI18n();

  return (
    <>
      <HeadSeo head={head.index} >
        <AnimationConf >
          <LandingPage key={router.asPath} />
        </AnimationConf>
      </HeadSeo>
    </>
  )
}

export default Home
