import { NextPage } from 'next'
import Head from 'next/head';

interface Props {
  title: string;
  description: string;
  
}

const SEO: NextPage<Props> = ({title, description}) => {
    return <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="theme-color" content="#FAF4FC" />
        {/* <meta name="theme-color" content="#000000" /> */}
        <link rel="icon" href="/static/images/add-btn.svg" />
    </Head>
}

export default SEO;