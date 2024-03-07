import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { CONTACT } from 'lib/db/identity';

const HeadSeo = ({ head ,children }) => {
    return (
        <>
            <Head>
                <title >{head.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
                <meta name="description" content={head.description} />
                <link rel="icon" href="/logo/logo_favicon.svg" />
            </Head>
            <NextSeo title={head.title} description={head.description} openGraph={{
                images: [
                    {
                        url: '/openGraph/Open_Graph_1',
                        width: 800,
                        height: 600,
                        alt: 'happy water open graph',
                        type: 'image/png',
                    },
                    {
                        url: '/openGraph/Open_Graph_2',
                        width: 800,
                        height: 600,
                        alt: 'happy water open graph',
                        type: 'image/png',
                    },
                    {
                        url: '/openGraph/Open_Graph_3',
                        width: 800,
                        height: 600,
                        alt: 'happy water open graph',
                        type: 'image/png',
                    }
                ],
                site_name: 'happy water',
            }} canonical={CONTACT.website} />
            {children}
        </>
    )
}

export default HeadSeo;