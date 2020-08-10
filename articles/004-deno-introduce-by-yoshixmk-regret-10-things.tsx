// @deno-types="https://deno.land/x/pagic@v0.8.4/src/types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
// @deno-types="https://github.com/svenanders/react-iframe/raw/v1.8.0/types.d.ts"
import Iframe from "https://cdn.pika.dev/react-iframe@1.8.0";

// @ts-ignore
const headerLine = <h1>Deno 発表資料</h1>;
const DenoIntro = () =>
  <>
    {headerLine}
    <Iframe
      src="https://docs.google.com/presentation/d/e/2PACX-1vR9fq06YxyGKCT6EqUBCSL_QzdkI7u3jb5NnA9IipzEAnyc50d6rqGxh6yOvgpY-3Fx9SmrGpMym-_P/embed?start=false&loop=false&delayms=3000"
      frameborder="0"
      width="700"
      height="500"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    >
    </Iframe>
  </>;

export default DenoIntro;

export const frontMatter = {
  title: "Deno 発表資料",
  author: "yoshixmk",
  published: "2020-07-08",
};
