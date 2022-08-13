import * as React from "react"
import Header from "./Header"
import {GlobalStyles} from "./styles/GlobalStyles";
import GlobalFonts from '../fonts/fonts';
import Hero from "./Hero";
import Trips from "./Trips";

const Layout = ({children}) => {

    return (
        <>
            <GlobalStyles/>
            <GlobalFonts/>
            <Header/>
            <main>
                <Hero/>
                <Trips/>
            </main>
        </>
    )
}


export default Layout
