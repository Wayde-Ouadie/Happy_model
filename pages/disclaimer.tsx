import type { NextPage } from 'next'
import Head from 'next/head'

import { useI18n } from 'helpers/hooks';

import { NextSeo } from 'next-seo';
import { Header, AnimationConf, Footer } from "components/layout";

import DisclaimerComponent from 'components/disclaimer';
import HeadSeo from 'components/HeadSeo';

const Disclaimer: NextPage = () => {
  const { head } = useI18n();

  return (
    <HeadSeo head={head.disclaimer}>
      <AnimationConf>
        <Header>
          <div id="scroller">
            <Footer>
              <DisclaimerComponent />
            </Footer>
          </div>
        </Header>
      </AnimationConf>
    </HeadSeo>

  )
}

export default Disclaimer
