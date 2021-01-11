// @deno-types="https://cdn.pagic.org/@types/react@16.9.50/index.d.ts"
import * as React from 'https://cdn.pagic.org/react@16.13.1/esnext/react.development.js';

// @ts-ignore
const headerLine = <h1>Deno 発表資料</h1>;
const DenoIntro = () =>
  <>
    {headerLine}
    <iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vR9fq06YxyGKCT6EqUBCSL_QzdkI7u3jb5NnA9IipzEAnyc50d6rqGxh6yOvgpY-3Fx9SmrGpMym-_P/embed?start=false&loop=false&delayms=3000"
      width="700"
      height="500"
    >
    </iframe>
  </>;

export default DenoIntro;

export const frontMatter = {
  title: "Deno 発表資料",
  author: "yoshixmk",
  published: "2020-07-08",
};
