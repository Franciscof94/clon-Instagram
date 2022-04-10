import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --backgroundInput: #efefef;
    --border: rgba(219,219,219,1);
    --white: #fff;
    --black2: #333333;
    --background-grey: #fafafa;
    --colorLetter1: #262626;
    --fontWeight1: 600;

    --border: #dbdbdb;
    --border2: rgba(219,219,219,1);
    --borderHistory: #DEDEDE;
    --iconSizeSmall: 24px;
    --iconSizeBig: 61px;
    --gradient-one: #da3394;
    --gradient-two: #e03c67;
    --gradient-three: #f3753b;
    --input-border: #DBDBDB;
    --gradient-four: #f99b4a;
    --colorSecondary: #8e8e8e;

    --text1: rgba(0,0,0,.8);
    --text2: rgba(142,142,142,1);
    --text3: rgba(38,38,38,1);
    --text4: rgba(0,0,0,.5);
    --text5: rgba(51,51,51,.6);

    --green: #00a650;
    --blue1: #0095f6;
    --blue2: #0095f6;
    --blue3: #3483fa;
    --yellow: #fff159;

    --border: #ddd;

    --panel: 0 1px 3px 0 rgba(0,0,0,.3);

    --reputacion1: #ffe7e6;
    --reputacion2: #fff4e7;
    --reputacion3: #fffde5;
    --reputacion4: #f3fee0;
    --reputacion5: #00a650;

    --family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    color: var(--text1);
    font-weight: inherit;
}

html{
    min-height: 100%;
    background-color: var(--background)
}

*, button, input{
    border: 0;
    background-color: none;
    font-family: var(--family);
}
`
