// @deno-types="https://cdn.pagic.org/@types/react@16.9.50/index.d.ts"
import * as React from 'https://cdn.pagic.org/react@16.13.1/esnext/react.development.js';
// @ts-ignore
const headerLine = React.createElement("h1", null, "Playwright \u767A\u8868\u8CC7\u6599");
const DenoIntro = () => React.createElement(React.Fragment, null,
    headerLine,
    React.createElement("iframe", { src: "https://docs.google.com/presentation/d/e/2PACX-1vTKxRKFtQIAOct29T3wlA2ZbEtFNBhTNraRQ34ha-moot_OQnq9nkvsBLP99RKFLUHxLGPD-42ngO74/embed?start=false&loop=false&delayms=3000", width: "700", height: "500" }));
export default DenoIntro;
export const frontMatter = {
    title: "Playwright 発表資料",
    author: "yoshixmk",
    published: "2021-09-23",
};
