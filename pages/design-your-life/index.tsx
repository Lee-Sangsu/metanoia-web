import type { NextPage } from 'next';
import styles from 'styles/Methodologies.module.css';
import SEO from 'components/SEO';
import { useRouter } from 'next/router';
import NextBtn from 'components/Methodologies/NextBtn';
import Link from 'next/link';

const LifeDesignMethodIntro: NextPage = () => {
    const router = useRouter();
    const { method } = router.query;

    

  return (<>
    <SEO title='Life Design - Metanoia' description='Find the true-yourself from the following methodologies.' />

    <div className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.h1}>Design your life</h1>
        <div className={styles.activity}>
          <h6 className={styles.lefth6}>
            You are going to find true-yourself from the following methodologies. Please ~~.
          </h6>
        </div>

        {/* Link statement like below */}
        <Link href="/design-your-life/[method]" as={`/design-your-life/life-graph`}>
          <a>Life Graph</a>
        </Link>

        <NextBtn to="/life-graph" />
      </main>
    </div>
    </>
  )
}

export default LifeDesignMethodIntro;
