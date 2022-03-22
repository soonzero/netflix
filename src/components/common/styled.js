import { createGlobalStyle } from "styled-components";
import NetflixSansLight from "fonts/NetflixSans_W_Lt.woff2";
import NetflixSansRegular from "fonts/NetflixSans_W_Rg.woff2";
import NetflixSansMedium from "fonts/NetflixSans_W_Md.woff2";
import NetflixSansBold from "fonts/NetflixSans_W_Bd.woff2";
import NetflixSansThick from "fonts/NetflixSans_W_Th.woff2";
import NetflixIcon from "fonts/nf-icon-v1-93.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Netflix Sans";
    font-weight: 300;
    src: url(${NetflixSansLight}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 400;
    src: url(${NetflixSansRegular}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 500;
    src: url(${NetflixSansMedium}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 600;
    src: url(${NetflixSansBold}) format("woff2");
}

@font-face {
    font-family: "Netflix Sans";
    font-weight: 700;
    src: url(${NetflixSansThick}) format("woff2");
}

@font-face {
    font-family: "Netflix Icon";
    src: url(${NetflixIcon}) format("woff");
}

    html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
select,
button {
  font-family: "Netflix Sans";
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  word-break: keep-all;
}

[class*="icon-"] {
          font-family: "Netflix Icon";
          line-height: 1;
        }

        
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  margin: 0;
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

`;
