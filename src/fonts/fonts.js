import { createGlobalStyle } from 'styled-components';

import DynaPuffFontWoff2 from './DynaPuff-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'DynaPuff';
        src: local('DynaPuff'), local('DynaPuff'),
        url(${DynaPuffFontWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;
