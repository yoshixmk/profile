// @deno-types="https://cdn.pagic.org/@types/react@16.9.50/index.d.ts"
import * as React from 'https://cdn.pagic.org/react@16.13.1/esnext/react.development.js';
// @ts-ignore
const headerLine = React.createElement("h1", null, "Deno \u767A\u8868\u8CC7\u6599");
const DenoIntro = () => React.createElement(React.Fragment, null,
    headerLine,
    React.createElement("iframe", { src: "https://docs.google.com/presentation/d/e/2PACX-1vR9fq06YxyGKCT6EqUBCSL_QzdkI7u3jb5NnA9IipzEAnyc50d6rqGxh6yOvgpY-3Fx9SmrGpMym-_P/embed?start=false&loop=false&delayms=3000", width: "700", height: "500" }));
export default DenoIntro;
export const frontMatter = {
    title: "Deno 発表資料",
    author: "yoshixmk",
    published: "2020-07-08",
};
