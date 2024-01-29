import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import FacultyInfoDesktop from "../components/FacultyInfo/FacultyInfoDesktop";
import FacultyInfoMobile from "../components/FacultyInfo/FacultyInfoMobile";
import FacultyInfoTablet from "../components/FacultyInfo/FacultyInfoTablet";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Colors from "../constants/colors";
import { FacultyData, LecturerData } from "../constants/data";
import Footer from "../components/Footer";
import PromoBanner from "../components/PromoBanner";
import Head from "next/head";
import { GetMentorList, GetWPLList } from "../services/faculty.service";

const FacultyPage = () => {
  const DESKTOP_ROW_ITEMS_COUNT = 4;
  const TABLET_ROW_ITEMS_COUNT = 3;
  const MOBILE_ROW_ITEMS_COUNT = 1;

  const [mentorsData, setMentorsData] = useState([])
  const [wplData, setWplData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await GetMentorList(1, 1000);
        setMentorsData(res?.data?.data);
      } catch (e) {
        console.log(e)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await GetWPLList(1, 1000);
        setWplData(res?.data?.data);
      } catch (e) {
        console.log(e)
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>
          Faculty - The Audio Guys (TAG) Institute | Mumbai
        </title>

        <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai" />
        <meta property="og:title" content="Faculty - The Audio Guys (TAG) Institute | Mumbai" />
        <meta property="og:url" content="https://www.tagmumbai.com/faculty" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="184" />
        <meta itemProp="name" content="Faculty - The Audio Guys (TAG) Institute | Mumbai" />
        <meta itemProp="url" content="https://www.tagmumbai.com/faculty" />
        <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w" />
        <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w" />
        <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w" />
        <meta name="twitter:title" content="Faculty - The Audio Guys (TAG) Institute | Mumbai" />
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w" />
        <meta name="twitter:url" content="https://www.tagmumbai.com/faculty" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="" />
      </Head>

      <main>
        <section className="faculty-hero ">
          <div className="bg-tint-60 blur-5 ">
            <Navbar />
            <div className="container faculty-hero-container d-flex flex-column  justify-content-center align-items-center text-white p-5 text-center  ">
              <h1 className="home-slider-heading fw-bold py-4">
                Faculty<span className="text-theme">.</span>
              </h1>
              <h4 className="pb-4 position-relative faculty-tagline">
                <span
                  className="position-absolute"
                  style={{ marginLeft: -40, top: -20 }}
                >
                  <FaQuoteLeft color={Colors.primaryColor} />
                </span>
                BECAUSE THE BEST EDUCATION COMES
                <br className="d-none d-md-block" /> FROM THE BEST EDUCATORS
                <span
                  className="position-absolute"
                  style={{ marginLeft: 20, bottom: 10 }}
                >
                  <FaQuoteRight color={Colors.primaryColor} />
                </span>
              </h4>
              <p className="py-4 para-text campus-para-width ">
                We at TAG Institute believe that every student is unique, with a
                unique set of skills that need to be honed and nurtured with
                utmost care. It is of prime importance to partner the right
                students with the right mentors. To translate this into reality,
                TAG Institute is proud to announce the Biggest Faculty For Sound
                Engineering and Music Production Courses in the Country.
              </p>
            </div>
          </div>
        </section>
        <section style={{ background: "#101010" }}>
          <div className="container text-white py-5 ">
            <h1 className="text-center campus-studios-heading ">THE MENTORS</h1>
            <div className="d-flex justify-content-center align-content-center ">
              {/* <p className="text-center pt-4 pb-5 para-text campus-para-width">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex minima.
              </p> */}
            </div>
            <FacultyInfoDesktop itemsPerRow={DESKTOP_ROW_ITEMS_COUNT} dark dataArray={mentorsData} />
            <FacultyInfoTablet itemsPerRow={TABLET_ROW_ITEMS_COUNT} dark dataArray={mentorsData} />
            <FacultyInfoMobile itemsPerRow={MOBILE_ROW_ITEMS_COUNT} dark dataArray={mentorsData} />
          </div>
        </section>
        <section>
          <div className="container  py-5 ">
            <h1 className="text-center text-theme fw-semiBold ">
              WORKING PROFESSIONAL LECTURERS
            </h1>
            <div className="d-flex justify-content-center align-content-center ">
              {/* <p className="text-center pt-4 pb-5 para-text campus-para-width">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex minima.
              </p> */}
            </div>
            <FacultyInfoDesktop itemsPerRow={DESKTOP_ROW_ITEMS_COUNT} dataArray={wplData} />
            <FacultyInfoTablet itemsPerRow={TABLET_ROW_ITEMS_COUNT} dataArray={wplData} />
            <FacultyInfoMobile itemsPerRow={MOBILE_ROW_ITEMS_COUNT} dataArray={wplData} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default FacultyPage;
