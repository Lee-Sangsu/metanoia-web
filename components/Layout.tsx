import { Navigation } from "./Layouts/Navigation";


export default function Layout({children}:any) {
    return <>
        <Navigation />
        <main>{children}</main>
    </> 
}