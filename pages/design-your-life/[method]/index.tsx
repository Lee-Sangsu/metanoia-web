import type { NextPage } from 'next';
import styles from 'styles/Methodologies.module.css';
import SEO from 'components/SEO';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NextBtn from 'components/Methodologies/NextBtn';
import LifeGraphCanvas from 'components/Methodologies/LifeGraphCanvas';
import { useState } from 'react';
import AddNewLifeEvent from 'components/Methodologies/AddNewLifeEvent';

const LifeDesignMethod: NextPage = () => {
    const router = useRouter();
    const { method } = router.query;

    

  return (<>
    <SEO title='Life Design - Stact' description='Find the true-yourself from the following methodologies.' />

    <div className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.h1}>Design your life</h1>
        <div className={styles.activity}>
          <h6 className={styles.lefth6}>
            You are going to find true-yourself from the following methodologies. Please ~~.
          </h6>
        </div>

        <LifeGraphCanvas />

        <NextBtn to="/life-graph" />
      </main>
    </div>
    </>
  )
}

export default LifeDesignMethod;
