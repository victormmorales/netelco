// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html className='scroll-smooth' lang='en'>
//       <Head />
//       <body className='md:overflow-visible'>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html className='scroll-smooth' lang='en'>
        <Head />
        <body className='md:overflow-visible'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
