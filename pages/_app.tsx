import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout';
import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';
import Footer from 'components/Layouts/Footer';
import { CookieBanner } from 'components/Layouts/CookieBanner';
import { getCookie } from 'public/functions/cookie';
// import { firebase } from 'global/firebase';

function MyApp({ Component, pageProps }: AppProps) {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    getCookie("show_banner") === "false" ? setShowBanner(false) : setShowBanner(true);
    setShowBanner(true);
  }, [])
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
  //   return () => unsubscribe();

  // })
  return <RecoilRoot>
    <Layout />
    <Component {...pageProps} />
    {showBanner ? <CookieBanner /> : <></>}
    <Footer />
  </RecoilRoot>
}

export default MyApp
