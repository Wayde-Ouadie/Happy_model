import { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script';


export default function Document() {

      return (
            <Html lang='en'>
                  
                  <Head >
                        <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
                        <link rel="preconnect" href="https://fonts.googleapis.com"/>
                        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

                  </Head>
                  <body className='bg-dark_0'>
                        <Main />
                        <div id='tooltip'></div>
                        <NextScript />
                  </body>
            </Html>
      )
}