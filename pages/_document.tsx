import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <meta name="application-name" content="Productivitia" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Productivitia" />
      <meta
        name="description"
        content="Increase Producitvity With a Startpage that Gamifies Your Life"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />

      <link rel="apple-touch-icon" href="/icons/ios/152.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/ios/152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/ios/180.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/ios/167.png" />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/icons/favicon.ico" />

      <meta
        name="twitter:card"
        content="Increase Producitvity With a Startpage that Gamifies Your Life"
      />
      <meta name="twitter:url" content="https://productivitia.netlify.app" />
      <meta name="twitter:title" content="Productivitia" />
      <meta
        name="twitter:description"
        content="Increase Producitvity With a Startpage that Gamifies Your Life"
      />
      <meta
        name="twitter:image"
        content="https://productivitia.netlify.app/icons/android/android-launchericon-192-192.png"
      />
      <meta name="twitter:creator" content="@parinzee" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Productivitia" />
      <meta property="og:description" content="the world" />
      <meta property="og:site_name" content="Productivitia" />
      <meta property="og:url" content="https://productivitia.netlify.app" />
      <meta
        property="og:image"
        content="https://yourdomain.com/icons/ios/152.png"
      />

      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <meta
          name="description"
          content="A startpage with an aim of helping you to improve productivity."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
