import type { NextPage } from 'next'
import Head from 'next/head'

import { useI18n } from 'helpers/hooks';

import HeadSeo from 'components/HeadSeo';



const LitePaper: NextPage = () => {
  const { head } = useI18n();

  return (
      <HeadSeo head={head.litepaper}>

      </HeadSeo>
  )
}

export default LitePaper
