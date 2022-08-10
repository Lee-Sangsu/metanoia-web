import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export default function CTAcontainer({ href, leftAlign }: any) {
    const imageName = leftAlign ? "self-awareness.png" : "life-path.svg";

    return (<Link href={href} passHref>
        <span className={styles.ctasecondary} style={{flexDirection: leftAlign ? "row" : "row-reverse"}}>
            <Image src={`/static/images/${imageName}`} width="92px" height="64px" alt={imageName} style={{boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.25)"}} />
            <span className={styles.btnlabel}>
                {leftAlign ? <>
                    <label className={styles.btnlabelfir}>Design your life based on </label>
                    <strong className={styles.btnlabelsec}>Self-awareness</strong>
                </> : <>
                    <label className={styles.btnlabelfir}>Accomplish your <strong className={styles.btnlabelsec}>Life Path</strong> <br />
                    with other adventurers! </label>
                </>
                }
                {/* <label className={styles.btnlabelsec}>Self-awareness</label> */}
            </span>
        </span>
    </Link>);
}