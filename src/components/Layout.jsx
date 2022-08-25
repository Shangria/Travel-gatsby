import * as React from "react"
import Header from "./Header"
import {GlobalStyles} from "./styles/GlobalStyles";
import GlobalFonts from '../fonts/fonts';
import Seo from "./Seo";
import {ThemeProvider} from 'styled-components'
import {baseTheme} from './styles/theme'


const Layout = ({children}) => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Seo title='Home'/>
            <GlobalStyles/>
            <GlobalFonts/>
            <Header/>
            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}

export default Layout
