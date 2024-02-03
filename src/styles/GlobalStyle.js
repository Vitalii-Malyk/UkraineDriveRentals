import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}



:root{
    /* colors */
   --color-wight: #fff;
   --color-black: #121417;
   --color-text: rgba(18, 20, 23, 0.50);
   --color-label: rgb(138, 138, 137); 
   --color-brand: #3470FF;
   --color-accent: #0B44CD;
   --color-fav-active: rgb(52, 112, 255);
   --color-fav-normal: rgba(255, 255, 255, 0.8);
   --color-modal-backdrop: rgba(18, 20, 23, 0.5);
   --color-control-background: rgba(247, 247, 251, 1);
   --shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

   /* typography */
  
   --fw-semi-bold: 600;
   --fw-normal: 500;
   --fw-light: 400;
   --fs-ss: 12px;
   --fs-sm: 14px;
   --fs-md: 16px;
   --fs-lg: 18px;
   --fs-xl: 24px;
}


body {
  font-family: 'Manrope', sans-serif; 
  font-weight: 400;
  font-style: normal;
  color: #111111;
  /* width: 100%; */
  height: 100%;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyle;
