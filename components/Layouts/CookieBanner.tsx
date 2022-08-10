import { getAllCookies, removeAllCookies, setCookie } from "public/functions/cookie";
import Image from "next/image";
import Link from "next/link";
import styles from "public/static/css/cookie-banner.module.css";
import React, { LegacyRef } from "react";

export const CookieBanner = () => {
    const cookieContainerRef:LegacyRef<HTMLDivElement> | null = React.useRef(null);
    const [containerExpanded, setContainerExpanded] = React.useState(false);
    const [moreCookieOptions, setMoreCookieOptions] = React.useState(false);

    const expandCookieOptions = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        setContainerExpanded(!containerExpanded);
    };

    const cookieAcceptance = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const {currentTarget: {
            name
        }} = event;
        if (name === "more-options") {
            // Pop-up the list of cookies.
            setMoreCookieOptions(true);
            console.log(getAllCookies());
        } else if (name === "reject-all") {
            setCookie("show_banner", "false", 180);
            removeAllCookies();
            cookieContainerRef.current!.style.display = "none";
        } else if (name === "accept-all") {
            setCookie("show_banner", "false", 180);
            cookieContainerRef.current!.style.display = "none";
        } else {
            console.error("Something went wrong dude;")}
    };

    return (<>
        <div style={{
            height: containerExpanded ? "120px" : "56px",
            alignItems: containerExpanded ? "flex-start" : "center",
            padding: containerExpanded ? "12px 16px" : "0 16px",
            flexDirection: containerExpanded ? "column" : "row"
        }} ref={cookieContainerRef} className={styles.cookiecontainer}>
            <div className={styles.labelscontainer}>
                <label>This website uses cookie to offer better experience! <br />
                Check our{` `}<Link href="https://merakiteam.org/cookie-policy/">Cookie Policy</Link></label>
                <div onClick={expandCookieOptions}>
                    <Image alt='click to allow or deny cookies' src="/static/images/expand.svg" width="12px" height="6.75px" style={{
                        transform: containerExpanded ? 'rotate(180deg)' : 'initial'
                    }} />
                </div> 
            </div>
            {containerExpanded ? <div className={styles.cookiebtncontainer}>
                <button className={styles.cookiebtn} name="more-options" onClick={cookieAcceptance}>More Options</button>
                <button className={styles.cookiebtn} name="reject-all" onClick={cookieAcceptance}>Reject All</button>
                <button className={styles.cookiebtn} name="accept-all" onClick={cookieAcceptance}>Accept All</button>
            </div> : <></>}
        </div>
        </>
    )
};