import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import AboutImage1 from "../public/assets/Logo.webp";
import AboutImage2 from "../public/assets/the-vision.jpg";
import Footer from "../components/Footer";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us - The Audio Guys (TAG) Institute | Mumbai</title>

        <meta
          property="og:site_name"
          content="The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          property="og:title"
          content="About Us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta property="og:url" content="https://www.tagmumbai.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="184" />
        <meta
          itemProp="name"
          content="About Us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta itemProp="url" content="https://www.tagmumbai.com/about" />
        <meta
          itemProp="thumbnailUrl"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <link
          rel="image_src"
          href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta
          itemProp="image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta
          name="twitter:title"
          content="About Us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta name="twitter:url" content="https://www.tagmumbai.com/about" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="" />
      </Head>

      <main className="about-us-bg">
        <div className="bg-tint-50">
          <Navbar className="" />
          <section>
            <div className="container">
              <div className="row py-5">
                <div className="col-md-6  text-white d-flex text-center text-md-start flex-column justify-content-center">
                  <h1 className="display-1 fw-bold mb-3 mb-md-0">
                    <span className="text-theme">About</span> Us
                  </h1>
                  <p className="about-us-paragraph">
                    The Audio Guys Institute has been established with the aim
                    towards providing unparalleled quality education in the
                    field of ‘Sound Engineering and Audio Production’. <br /> As
                    the name suggests, the Institute has been formed by Audio
                    Professionals to nurture promising talents in the field of
                    Media and Entertainment. The experience and passion of the
                    founders has played a key role in formation of the Institute
                    and has led to a very practical and creative approach
                    towards education, providing students with relevant and
                    hands-on learning experience.
                  </p>
                </div>
                <div className="col-md-6 p-5 p-md-0 d-flex justify-content-center justify-content-md-end">
                  <Image
                    className="p-md-5"
                    objectFit="contain"
                    src={AboutImage1}
                    height="250px"
                    width="400px"
                  />
                </div>
              </div>
            </div>
          </section>
          <section style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="container">
              <div className="row py-5">
                <div className="col-md-6 p-5 p-md-0 d-flex justify-content-center justify-content-md-start order-2  order-last order-lg-first">
                  <Image
                    className="about-vision-img"
                    src={AboutImage2}
                    height="500px"
                    width="500px"
                  />
                </div>
                <div className="col-md-6 text-end text-white d-flex text-center text-md-start flex-column justify-content-center ">
                  <h1 className="display-1 fw-bold mb-3 mb-md-0 ">
                    The <span className="text-theme">Vision</span>
                  </h1>
                  <p className="about-us-paragraph">
                    TAG Institute has been created to fill the prominently
                    observed gap of sub par education standards and high
                    academic fees in the field of audio education. <br /> Our
                    Mission is to provide unparalleled standard of audio
                    education to the students at a very affordable fee. TAG
                    creates a space where education becomes fun and interactive
                    whilst developing essential skills and up-to-date knowledge
                    with their world-class facilities and studios.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*<section>*/}
          {/*  <ScrollContainer className="scroll-container">*/}
          {/*    <div style={{minHeight:800, border: '1px solid red'}}>*/}
          {/*    <Image src={AboutImage1} height="800px" width={"2000px"}  />*/}
          {/*    </div>*/}
          {/*  </ScrollContainer>*/}
          {/*</section>*/}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
