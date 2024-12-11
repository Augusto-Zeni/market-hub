import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        font-family: "Inter", serif;
        padding:0;
        margin:0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #F3F4EE;
        color: #3b3b3b;
        -webkit-font-smoothing: antialiased;
    }
`

export default GlobalStyles
