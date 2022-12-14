import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SEO from 'components/SEO';
import Link from 'next/link';
import CTAcontainer from 'components/CTAcontainer';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  const updateWindowWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth)
  }, [])

  return (<>
    <SEO title='Stact' description='Well recognised yourself will be visualised on the community with the clear life path.' />

    <div className={styles.container}>

      <main className={styles.main}>
        {innerWidth > 600 ? <div className={styles.indexbgcontainer}>
          <Image src="/static/images/life-path-bg.svg" alt="" className={styles.lifepathbg} layout="fill" />
        </div> : <></>}
        <div>
          <h1 className={styles.title}>
            Refocus on your welfare and development
          </h1>
          <h4>Adventure your <Link href="/life-graph">Eudonomia</Link>!</h4>
        </div>
        <div className={styles.ctacontainer}>
          { innerWidth < 600 ? <>
            <CTAcontainer href="/life-graph" leftAlign={true} />
            <CTAcontainer href="/life-path" leftAlign={false} />
          </>
            : <div>
              This should be the desktop view
            </div>
          }
        </div>
      </main>

    </div>
    </>
  )
}

/*
Home.getInitialProps = async function() {
  const domain:string = "";
  const response = await fetch(`https://${domain}/public-api/products`);
  console.log(response)
  const result = await response.json();
  return { productData: result.data }
};
*/

export default Home
