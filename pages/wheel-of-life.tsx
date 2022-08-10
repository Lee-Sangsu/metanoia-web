import type { NextPage } from 'next';
import styles from '../styles/Methodologies.module.css';
import SEO from 'components/SEO';
// import Image from 'next/image';
import NextBtn from 'components/Methodologies/NextBtn';
import Footer from 'components/Layouts/Footer';
import React, { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { LifeValueState } from 'states/Methodologies/LifeValueState';

const WheelOfLife: NextPage = () => {
    const values = useRecoilValue(LifeValueState);  
    const [valueIndex, setValueIndex] = useState(0);
    // console.log(values);

    const valueContainerRef = useRef<HTMLUListElement>(null);

    useLayoutEffect(() => {
        const scrolledX = valueContainerRef.current?.scrollLeft;
        // scrolledX
        console.log(scrolledX)
        
    }, [valueContainerRef])
    
    const scrollValue = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.name === "left" && valueIndex !== 0) {
            setValueIndex(valueIndex - 1);
            // valueContainerRef.current?.scrollTo(400, 0)
        } else {
            setValueIndex
        }
    }

  
    return (<>
        <SEO title='Methodologies | Metanoia' description='Generated by Sangsoo Lee.' />
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.h1}>Wheel of Life</h1>
                <h6 className={styles.lefth6}>
                Value the part of the value as much as you think that you already achieved.
                </h6>
                <ul ref={valueContainerRef} className={styles.valuecontainer}>
                    {values.map((value, index) => <>
                        <li className={styles.values} key={index}>
                            <h1 onClick={() => console.log(valueContainerRef.current?.scrollLeft)}>{value}</h1>
                        </li>
                    </>)}
                </ul>
                <div>
                    <button name="left-btn" onClick={scrollValue} className={styles.slider}>left</button>
                    <button name="right-btn" onClick={scrollValue} className={styles.slider}>right</button>
                </div>
                {/* <div ref={boxRef}>
                <canvas ref={canvasRef} className={styles.canvas}></canvas>
                </div> */}

                <NextBtn to="/wheel-of-life" />
            </main>
            <Footer />
        </div>
    </>)
}

export default WheelOfLife