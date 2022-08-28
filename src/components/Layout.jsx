import * as React from "react";
import Header from "./Header";
import {GlobalStyles} from "./styles/GlobalStyles";

import Seo from "./Seo";
import {ThemeProvider} from 'styled-components'
import {baseTheme} from './styles/theme';
import Footer from "./Footer";


const Layout = ({children}) => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Seo title='Home'/>
            <GlobalStyles/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default Layout
