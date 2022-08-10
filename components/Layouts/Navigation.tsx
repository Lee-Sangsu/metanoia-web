import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from 'styles/Home.module.css';
import { gettingAuth } from "public/states/firebase";

export const Navigation: NextPage = ( ) => {
    // const user = null;

    // const user = 

    return (
        <header>
            <nav >
                <Link href="/">
                    <a className={styles.home}>Metanoia</a>
                </Link>
                <div className={styles.ndiv}>
                    {/* <Link href="/about-us">
                        <a className='a'>about us</a>
                    </Link> */}
                    <Link href={gettingAuth ? "/my-account" : "/auth"}>
                        <a className='a user'>
                            <Image src="/static/images/account.svg" alt="My account" width="22px" height="23.1px" />
                        </a>
                    </Link>
                    
                    <button onClick={() => console.log("Expand Menu list")}>
                        <a className='a'>
                            <Image src={"/static/images/hamburger-btn.svg"} alt="Shopping Bag" width="24px" height="20.35px" />
                        </a>
                    </button>
                </div>
            </nav>
            <style jsx>{`
                nav {
                    width: 100vw;
                    padding: 0 4%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 64px;
                    background: radial-gradient(50% 50% at 50% 50%, rgba(233, 241, 238, 0.35) 0%, rgba(239, 220, 246, 0.32) 100%);
                    box-shadow: 0px 3px 8px rgba(233, 241, 238, 0.3);
                    position: fixed;
                    backdrop-filter: blur(4px);

                }
                
                .a {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                    font-size: 15px;
                    margin-left: 32px;
                }
                .a:hover,
                .a:focus {
                    filter: invert(58%) sepia(62%) saturate(3711%) hue-rotate(158deg) brightness(90%) contrast(101%);
                }

                .user {
                    width: 80px;
                    // justify-content: space-between;
                }

                button {
                    all: unset;
                }
            `}</style>
        </header>)
}