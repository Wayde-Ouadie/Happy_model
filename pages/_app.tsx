import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

import { createContext, useCallback } from "react";
import Script from 'next/script';


import { useArrayRef } from "helpers/hooks";

export const SectionContext = createContext(null);

export const OffsetProvider = ({ children }) => {
  const [sectionPosition, setSectionPosition] = useArrayRef();
  const getOffset = (id) => () => {
    return sectionPosition?.current.find((e) => e.id === id)?.offsetTop;
  };
  return (
    <>
      <SectionContext.Provider
        value={{ section: getOffset, setSectionPosition: setSectionPosition, sectionPosition }}
      >
        {children}
      </SectionContext.Provider>
    </>
  );
};
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload" id='google analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <main>
        <OffsetProvider>
          <Component key={router.asPath} {...pageProps} />
        </OffsetProvider>
      </main>
    </>

  );
}

export default MyApp;
