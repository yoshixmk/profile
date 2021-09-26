// @deno-types="https://cdn.pagic.org/@types/react@16.9.50/index.d.ts"
import * as React from 'https://cdn.pagic.org/react@16.13.1/esnext/react.development.js';

// @ts-ignore
const headerLine = <h1>Playwright 発表資料</h1>;
const DenoIntro = () =>
  <>
    {headerLine}
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vTKxRKFtQIAOct29T3wlA2ZbEtFNBhTNraRQ34ha-moot_OQnq9nkvsBLP99RKFLUHxLGPD-42ngO74/embed?start=false&loop=false&delayms=3000"
      width="700"
      height="500"
    >
    </iframe>
  </>;

export default DenoIntro;

export const frontMatter = {
  title: "Playwright 発表資料",
  author: "yoshixmk",
  published: "2021-09-23",
};
