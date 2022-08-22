import * as React from "react"
import Header from "./Header"
import {GlobalStyles} from "./styles/GlobalStyles";
import GlobalFonts from '../fonts/fonts';
import Seo from "./seo";
import Hero from "./Hero";
import Trips from "./Trips";
import { ThemeProvider } from 'styled-components'
import { baseTheme } from './styles/theme'
import FormWrap from "./FormWrap";


const Layout = () => {

    return (
        <>
            <ThemeProvider theme={baseTheme}>
            <Seo title='Home'/>
            <GlobalStyles/>
            <GlobalFonts/>
            <Header/>

            <main>
                <Hero/>
                <Trips/>
                <FormWrap/>
            </main>
            </ThemeProvider>
        </>
    )
}


export default Layout
