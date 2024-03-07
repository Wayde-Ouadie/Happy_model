import type { NextPage } from "next";
import Head from "next/head";

import { useI18n } from "helpers/hooks";

import { Header, AnimationConf, Footer } from "components/layout";
import HeadSeo from 'components/HeadSeo';

import RegisterComponent from 'components/register';
// import { OffsetProvider } from "components/landingPage/LandingPage";
const Register: NextPage = () => {
  const { head } = useI18n();

  return (
    <HeadSeo head={head.register}>
      <AnimationConf>
        <Header>
          <div id="scroller">
            <Footer>
              <RegisterComponent />
            </Footer>
          </div>
        </Header>
      </AnimationConf>
    </HeadSeo>

  );
};

export default Register;
