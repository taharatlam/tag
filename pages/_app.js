import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.scss";
import Script from "next/script";
import Head from "next/head";
import { motion } from "framer-motion";
import PromoBanner from "../components/PromoBanner";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useRouter } from "next/router";

function App({ Component, pageProps, router }) {
  const url = router.route;
  console.log("router", url);

  // REMOVING EXISTING GOOGLE CODE
  // AS PER NIKITA'S DIRECTION
  // MAY 24, 2023

  useEffect(() => {
    ReactGA.initialize("G-3MCB6XS02B");

    // console.log('pathname', url)
    ReactGA.pageview(url);
  }, [url]);

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-WKMJJ7B");`,
        }}
      ></Script> */}
      <Script
        strategy="afterInteractive"
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKMJJ7B" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></Script>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GTM-WKMJJ7B"
      />

      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/5e97ab7b35bcbb0c9ab18d8e/default"
      />

      <Head>
        <script>
          {`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-WKMJJ7B");`}
        </script>

        <title>
          The Audio Guys (TAG) Institute | Mumbai-Music Production And Sound
          Engineering Course
        </title>
        <meta
          property="og:site_name"
          content="The Audio Guys (TAG) Institute &#124; Mumbai"
        />
        <meta
          property="og:title"
          content="The Audio Guys (TAG) Institute | Mumbai-Music Production And Sound
          Engineering Course"
        />
        <meta
          property="og:url"
          content="https://www.tagmumbai.com/mumbai/music-production-course"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."
        />
        <meta
          property="og:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="1155" />
        <meta
          itemProp="name"
          content="The Audio Guys (TAG) Institute | Mumbai-Music Production And Sound
          Engineering Course"
        />
        <meta
          itemProp="url"
          content="https://www.tagmumbai.com/mumbai/music-production-course"
        />
        <meta
          itemProp="description"
          content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."
        />
        <meta
          itemProp="thumbnailUrl"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta
          itemProp="image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta
          name="twitter:title"
          content="The Audio Guys (TAG) Institute | Mumbai-Music Production And Sound
          Engineering Course"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta
          name="twitter:url"
          content="https://www.tagmumbai.com/mumbai/music-production-course"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."
        />
        <meta
          name="description"
          content="Music Production Course India. 1-year Diploma. Study Sound Engineering and
          music production diploma courses from the best faculty and campus in india.
          Hands on learning Professional artists and music producers like meghdeep
          bose, Amaal Mallik team, Clinton Cerejo team."
        />
      </Head>
      <>
        {/*<PromoBanner />*/}
        <Component {...pageProps} />
      </>
    </>
  );
}

export default App;
