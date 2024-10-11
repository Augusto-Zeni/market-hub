import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Montserrat", sans-serif;
        padding:0;
        margin:0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #F3F4EE;
        color: #a9a9a9;
    }
`

export default GlobalStyles
