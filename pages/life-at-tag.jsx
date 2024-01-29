import "react-responsive-carousel/lib/styles/carousel.min.css";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect, useState } from "react";

import { Endpoints } from "../constants/Endpoints";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import Instapost from "../components/Instapost";
import YTShortsCarousel from "../components/YTShortsCarousel";
import { Keys } from "../constants/keys";
import Navbar from "../components/Navbar/Navbar";
import { RiExternalLinkFill } from "react-icons/ri";
import axios from "axios";
import { getInstagramData } from "../services/instagram.service";

const LifePage = () => {
  const [igMediaDatas, setIgMediaDatas] = useState([]);
  const [profileData, setprofileData] = useState();

  //Fetch Youtube Data v3 Library -> PlaylistItems API
  useEffect(() => {
    getInstagramMedia();
  }, []);

  async function getInstagramMedia() {
    const igData = await getInstagramData();
    setIgMediaDatas(igData.media);
    setprofileData(igData.profile);
  }

  return (
    <div>
      <Head>
        <title>Life at TAG - The Audio Guys (TAG) Institute | Mumbai</title>
      </Head>
      <main>
        <section className="news-events-hero">
          <div style={{ background: "rgba(0,0,0,0.5)" }}>
            <Navbar />
            <div
              className="container text-center text-white d-flex flex-column justify-content-center align-content-center "
              style={{ height: "65vh" }}
            >
              <h1 className="home-slider-heading fw-bold">
                Life at
                <span className="text-theme"> TAG.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="container text-center py-5 ">
          <div className="py-3 pb-4">
            {/* <h1 className="text-black fw-bold pb-4 d-flex align-items-center justify-content-center gap-2">
              Follow <span className="text-theme"> The Audio Guys </span>{" "}
              Institute on{" "}
              <Image
                alt="insta"
                src={
                  "https://res.cloudinary.com/tag-institute/image/upload/v1705091441/insta_yxh0cq.png"
                }
                height="40px"
                width="40px"
              />
            </h1> */}
            <div className="pb-4 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-2">
              <h1 className="text-black fs-1 fw-bold">
                Follow <span className="text-theme"> The Audio Guys </span>
                Institute on
              </h1>
              <Image
                alt="insta"
                src={
                  "https://res.cloudinary.com/tag-institute/image/upload/v1705091441/insta_yxh0cq.png"
                }
                height="50px"
                width="50px"
              />
            </div>
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
            <div className="position-relative" style={{ paddingBottom: "5vh" }}>
              <div
                className="position-absolute bottom-0 w-100 d-flex align-items-end justify-content-center"
                style={{
                  height: "30vh",
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
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
              >
                <Masonry>
                  {igMediaDatas.length &&
                    igMediaDatas.slice(0, 8).map((igMediaData) => (
                      <div
                        key={igMediaData.id}
                        className="alumni-carousel-container"
                      >
                        <Instapost
                          key={igMediaData.id}
                          thumbnail={igMediaData.media_url}
                          username={igMediaData.username}
                          createdAt={igMediaData.timestamp}
                          caption={igMediaData.caption}
                          url={igMediaData.permalink}
                        />
                      </div>
                    ))}
                </Masonry>
              </ResponsiveMasonry>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
              >
                <Masonry>
                  {igMediaDatas.length &&
                    igMediaDatas.slice(0, 3).map((igMediaData) => (
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

        <section className="text-center bg-black py-5">
          <div className="py-3 pb-4">
            <h1 className="text-white fw-bold">
              See Life at <span className="text-theme"> The Audio Guys </span>{" "}
              Institute - Mumbai
            </h1>
          </div>
          <YTShortsCarousel />
        </section>
        <Footer />
      </main>
    </div>
  );
};
export default LifePage;
