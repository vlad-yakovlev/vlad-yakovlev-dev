import { Html, Head, Main, NextScript, DocumentProps } from 'next/document'
import { FC } from 'react'

export const MyDocument: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-['DM_Sans']">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
