import type { NextPage } from 'next';
import styles from '../styles/Methodologies.module.css';
import SEO from 'components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import NextBtn from 'components/Methodologies/NextBtn';
import LifeGraphCanvas from 'components/Methodologies/LifeGraphCanvas';
import { useState } from 'react';
import AddNewLifeEvent from 'components/Methodologies/AddNewLifeEvent';

const LifeGraph: NextPage = () => {
  const now = Date.now();
  const timeNow = new Date(now);
  const mm = timeNow.getMonth()+1; 

  const [modal, setModal] = useState(false);
  const [lifeEvent, setLifeEvent] = useState({
    title: "",
    time:  `${timeNow.getFullYear()}-${mm<10 ? '0'+mm : mm}`, 
    description: ""
  });

  return (<>
    <SEO title='Metanoia' description='Generated by Sangsoo Lee.' />

    <div className={styles.container}>
      <AddNewLifeEvent lifeEvent={lifeEvent} setLifeEvent={setLifeEvent} styles={styles} modal={modal} setModal={setModal} />
      <main className={styles.main}>

        <h1 className={styles.h1}>Life Graph</h1>
        <div className={styles.activity}>
          <h6 className={styles.lefth6}>
            As you consider your life, add significant life events on your life line, marking the positive experiences above the line, and negatives below the line. 
          </h6>
          <div className={styles.addevent}>
            <Image onClick={() => setModal(true)} width="60px" height="60px" src="/static/images/add-btn.svg" alt="Add Event" />
            <label className={styles.addeventlabel}>Add Event</label>
          </div>          
        </div>

        <LifeGraphCanvas />

        <NextBtn to="/value-card" />
      </main>
    </div>
    </>
  )
}

export default LifeGraph
