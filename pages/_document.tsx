import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" />
            </Head>
            <body >
                <Main />
                <NextScript />
                <script src="//cdnjs.cloudflare.com/ajax/libs/wow/0.1.12/wow.min.js"></script>
                <script>
                    new WOW().init();
                </script>
                <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script>
            </body>
        </Html>
    );
}
