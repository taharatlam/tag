import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

import Colors from "../constants/colors";
import DigitalClassroom from "../public/assets/Classrooms/digital-classroom.jpeg";
import Elearning from "../public/assets/e-learning.jpg";
import { Endpoints } from "../constants/Endpoints";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Instapost from "../components/Instapost";
import { Keys } from "../constants/keys";
import Navbar from "../components/Navbar/Navbar";
import PromoBanner from "../components/PromoBanner";
import React from "react";
import { SiYoutubeshorts } from "react-icons/si";
import StudioCard from "../components/StudioCard";
import YTShortsCarousel from "../components/YTShortsCarousel";
import axios from "axios";
import { getInstagramData } from "../services/instagram.service";
import { studioData } from "../constants/CampusData";
import YTShortsCarouselCampus from "../components/YTShortsCarouselCampus";

const CampusPage = () => {
  const [igMediaDatas, setIgMediaDatas] = useState([]);
  const [profileData, setprofileData] = useState();

  useEffect(() => {
    getInstagramMedia();
  }, []);

  async function getInstagramMedia() {
    const igData = await getInstagramData();
    setIgMediaDatas(igData.media);
    setprofileData(igData.profile);
  }

  return (
    <>
      <Head>
        <title>Campus - The Audio Guys (TAG) Institute | Mumbai</title>

        <meta
          property="og:site_name"
          content="The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          property="og:title"
          content="Campus - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta property="og:url" content="https://www.tagmumbai.com/campus" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"
        />
        <meta
          property="og:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="1155" />
        <meta
          itemProp="name"
          content="Campus - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta itemProp="url" content="https://www.tagmumbai.com/campus" />
        <meta
          itemProp="description"
          content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"
        />
        <meta
          itemProp="thumbnailUrl"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <link
          rel="image_src"
          href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta
          itemProp="image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta
          name="twitter:title"
          content="Campus - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"
        />
        <meta name="twitter:url" content="https://www.tagmumbai.com/campus" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"
        />
        <meta
          name="description"
          content="Audio Engineering Institute. Discover about the facilities of the most 
      advanced Institute in India"
        />
      </Head>

      <main className="campus-page-bg ">
        <section className="campus-section-1">
          <div className="bg-tint-60 blur-5  ">
            <Navbar />
            <div className="container  text-white p-5 text-center text-md-start ">
              <h1 className="home-slider-heading fw-bold py-4">Campus</h1>
              <h4 className="pb-4 position-relative ">
                <span
                  className="position-absolute"
                  style={{ marginLeft: -30, top: -20 }}
                >
                  <FaQuoteLeft color={Colors.primaryColor} />
                </span>{" "}
                THE BEST WAY TO LEARN IS TO DO IT YOURSELF
                <span
                  className="position-absolute"
                  style={{ marginLeft: 10, bottom: 10 }}
                >
                  <FaQuoteRight color={Colors.primaryColor} />
                </span>
              </h4>
              <div style={{ maxWidth: 900 }}>
                <p className="campus-intro-para para-text pb-md-3">
                  Situated at the heart of the industry, TAG Institute proudly
                  offers a centrally air-conditioned campus featuring 5
                  world-class studios, classrooms and computer Lab. The campus
                  is very well connected by all means of public transport and is
                  in walking distance from Azad Nagar metro station.
                </p>
                <p className=" campus-intro-para para-text pb-md-3">
                  We are proud to have the first of the new SSL Origin console
                  in India and the first campus to have a network based
                  licensing server for all our softwares. Our campus also is the
                  first smart campus in India for Audio engineering and Music
                  Production. We closely monitor the growth of our students via
                  our exclusive student-learning portal.
                </p>
                <p className=" campus-intro-para para-text pb-md-3">
                  TAG is not only a paramount campus technically but is also the
                  curator of the most tight knit educational community in the
                  Indian Film Industry .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"campus-studios-section py-5"}>
          <div className="container text-white py-5 ">
            <h1 className="text-center campus-studios-heading ">OUR STUDIOS</h1>
            <div className="d-flex justify-content-center align-content-center px-4 ">
              <p className="text-center pt-4 pb-5 para-text campus-para-width">
                The Institute has 5 professional studios which are accessible to
                our students at all given times during the course. The Students
                get access to over 50 Microphones and an assortment of outboard
                gears from Manley, API, SPL, Antelope Audio, Focusrite,
                Earthworks, Genelec and others. We are also proud to have the
                first of the new SSL origin console in India and the first
                campus to have a network based licensing server for all our
                softwares.
              </p>
            </div>
            <div className="row ">
              {studioData.map((item, idx) => (
                <StudioCard
                  key={idx}
                  id={idx}
                  frontImage={item.frontImage}
                  studioName={item.studioName}
                  studioTitle={item.studioTitle}
                  studioDescription={item.studioDescription}
                  images={item.images}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={"pt-5"}>
          <div className="container text-black py-2 pb-lg-5 ">
            <h1 className="home-slider-heading fw-bolder text-center">
              See Life at TAG
            </h1>
            <h4 className="pt-4 position-relative text-center">
              THE BEST WAY TO LEARN IS TO DO IT YOURSELF
            </h4>
          </div>

          <div className="d-flex flex-column flex-lg-row">
            <section className="container text-center pt-3">
              <div className="pb-4">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center p-2 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <Image
                      alt="profile_pic"
                      src={
                        "https://res.cloudinary.com/tag-institute/image/upload/v1705089765/logo_dpafns.jpg"
                      }
                      className="border p-1"
                      style={{
                        borderRadius: "50px",
                      }}
                      height="60px"
                      width="60px"
                    />
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <div className="fs-4 lh-sm fw-bold">
                        {profileData?.username
                          ? profileData.username
                          : "taginstitute"}
                      </div>
                      <div className="fs-6">
                        {profileData?.media_count &&
                          `${profileData?.media_count} posts`}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-1 align-items-center mt-2">
                    <a
                      className="follow_btn"
                      onClick={() => {
                        window.open(
                          profileData?.profileUrl ||
                            "https://www.instagram.com/taginstitute/",
                          "_blank"
                        );
                      }}
                    >
                      Follow
                    </a>
                    <a
                      className="message_btn"
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/direct/t/119552112770034",
                          "_blank"
                        );
                      }}
                    >
                      Message
                    </a>
                  </div>
                </div>
                <div
                  className="position-relative"
                  style={{ paddingBottom: "5vh" }}
                >
                  <div
                    className="position-absolute bottom-0 w-100 d-flex align-items-end justify-content-center"
                    style={{
                      height: "20vh",
                      zIndex: 999,
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%)",
                    }}
                  >
                    <span
                      className="fs-2 fw-bold d-flex align-items-center gap-2"
                      style={{
                        background: "#D5C004",
                        background:
                          "linear-gradient(to right, #D5C004 0%, #FA7E1E 41%, #962FBF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.open(
                          profileData?.profileUrl ||
                            "https://www.instagram.com/taginstitute/",
                          "_blank"
                        );
                      }}
                    >
                      Check More
                      {/* <RiExternalLinkFill className="text-grey" /> */}
                    </span>
                  </div>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                    }}
                  >
                    <Masonry>
                      {igMediaDatas.length &&
                        igMediaDatas.slice(0, 3).map((igMediaData) => (
                          <div
                            key={igMediaData.id}
                            className="alumni-carousel-container"
                          >
                            <Instapost
                              key={igMediaData.id}
                              thumbnail={igMediaData.media_url}
                              username={igMediaData.username}
                              timestamp={igMediaData.timestamp}
                              caption={igMediaData.caption}
                              url={igMediaData.permalink}
                            />
                          </div>
                        ))}
                    </Masonry>
                  </ResponsiveMasonry>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                    }}
                  >
                    <Masonry>
                      {igMediaDatas.length &&
                        igMediaDatas.slice(0, 1).map((igMediaData) => (
                          <div
                            key={igMediaData.id}
                            className="alumni-mobile-carousel"
                          >
                            <Instapost
                              key={igMediaData.id}
                              thumbnail={igMediaData.media_url}
                              username={igMediaData.username}
                              timestamp={igMediaData.timestamp}
                              caption={igMediaData.caption}
                              url={igMediaData.permalink}
                            />
                          </div>
                        ))}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              </div>
            </section>
            <section className="container text-center pt-3">
              <div className="pb-4">
                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center p-2 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <SiYoutubeshorts color="red" size="3rem" />
                    <div className="d-flex flex-column justify-content-start align-items-start">
                      <div className="fs-3 lh-sm fw-bold yt-heading">
                        The Audio Guys
                      </div>
                    </div>
                  </div>
                  <div className="d-flex gap-1 align-items-center mt-2">
                    <a
                      className="subscribe_btn"
                      onClick={() => {
                        window.open(
                          "https://www.youtube.com/@TheAudioGuys?sub_confirmation=1",
                          "_blank"
                        );
                      }}
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
                <YTShortsCarouselCampus />
              </div>
            </section>
          </div>
        </section>

        <section className="bg-black py-5">
          <div className="container py-5 d-flex">
            <div className="row">
              <div className="col-md-5 order-2  order-last order-lg-first ">
                <div className="" style={{ height: 500 }}>
                  <Image src={DigitalClassroom} height="500px" width="500px" alt="" />
                </div>
              </div>
              <div className="col-md-7 d-flex flex-column align-items-center justify-content-center text-center text-md-start ">
                <h1 className="home-slider-heading text-theme fw-bold">
                  Digital Classrooms
                </h1>
                <div className="d-flex justify-content-center align-content-center ">
                  <p className="my-4 fw-bold para-text text-light campus-para-width campus-para-line-height">
                    TAG boasts a fully air-conditioned campus featuring 3
                    world-class studio facilities. The campus also has a
                    Computer Lab with Apple Macintosh computers and 2 classrooms
                    equipped with projectors, studio monitors, MIDI keyboards
                    and audio interfaces for the new age interactive learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container py-5 d-flex">
            <div className="row">
              <div className="col-md-7 text-white text-center text-md-start ">
                <h1 className="home-slider-heading fw-bold text-black">
                  The New
                  <span className="text-theme">
                    <br />
                    E-Learning
                  </span>
                </h1>
                <p className="py-5 pt-4 para-text text-black campus-para-line-height">
                  Our campus also is the first smart campus in India for Audio
                  engineering and Music production. We closely monitor the
                  growth of our students via our exclusive student-learning
                  portal. We use learning tools made by Companies like google
                  and Navitas to understand the needs of our students better.
                  Students are also evaluated on their Key Performance
                  Indicators, interactions and others.
                </p>
              </div>
              <div className="col-md-5 d-flex justify-content-end">
                <div className=" rounded">
                  <Image src={Elearning} height="500px" width="600px" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default CampusPage;
