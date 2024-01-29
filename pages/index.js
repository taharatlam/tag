import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  HomeCoursesData,
  homeSliderData,
  testimonials,
} from "../constants/homeData";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { sendOTP, verifyOTP } from "../services/otp.service";

import AlumniCarousel from "../components/AlumniCarousel/AlumniCarousel";
import AlumniCarouselMobileItem from "../components/AlumniCarousel/AlumniCarouselMobileItem";
import { Carousel } from "react-responsive-carousel";
import CourseMobileCard from "../components/CourseMobileCard";
import { EN } from "../constants/language/EN";
import FillUpButton from "../components/FillUpButton";
import FlipCards from "../components/FlipCards";
import Footer from "../components/Footer";
import GoogleReview from "../components/GoogleReview";
import GoogleReviewsSection from "../components/GoogleReviews";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Placement1 from "../public/assets/placements/placement1.JPG";
import Placement10 from "../public/assets/placements/placement10.JPG";
import Placement11 from "../public/assets/placements/placement11.JPG";
import Placement12 from "../public/assets/placements/placement12.JPG";
import Placement13 from "../public/assets/placements/placement13.JPG";
import Placement14 from "../public/assets/placements/placement14.PNG";
import Placement15 from "../public/assets/placements/placement15.JPG";
import Placement16 from "../public/assets/placements/placement16.JPG";
import Placement17 from "../public/assets/placements/placement17.JPG";
import Placement2 from "../public/assets/placements/placement2.PNG";
import Placement3 from "../public/assets/placements/placement3.JPG";
import Placement4 from "../public/assets/placements/placement4.JPG";
import Placement5 from "../public/assets/placements/placement5.PNG";
import Placement6 from "../public/assets/placements/placement6.PNG";
import Placement7 from "../public/assets/placements/placement7.PNG";
import Placement8 from "../public/assets/placements/placement8.JPG";
import Placement9 from "../public/assets/placements/placement9.JPG";
import { ReviewsData } from "../ReviewsData";
import axios from "axios";
import { gaCTA } from "../utils/analytics";
import { postQuery } from "../services/query.service";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useWindowSize } from "../utils/WindowHook";

export default function Home() {
  const placements = [
    Placement1,
    Placement2,
    Placement3,
    Placement4,
    Placement5,
    Placement6,
    Placement7,
    Placement8,
    Placement9,
    Placement10,
    Placement11,
    Placement12,
    Placement13,
    Placement14,
    Placement15,
    Placement16,
    Placement17,
  ];

  const { ref, inView, entry } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  const size = useWindowSize();
  const router = useRouter();
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [otpValue, setOtpValue] = React.useState("");
  const [otpVerified, setOtpVerified] = React.useState(false);
  const [showSendOtp, setShowSendOtp] = React.useState(true);
  const [showOtpField, setShowOtpField] = React.useState(false);
  const [responseSent, setResponseSent] = React.useState(false);
  const [alumnis, setAlumnis] = React.useState([]);

  //Fetch Youtube Data v3 Library -> PlaylistItems API
  useEffect(() => {
    getYoutubeData();
  }, []);

  async function getYoutubeData() {
    const YOUTUBE_DATA_V3_PLAYLIST_ITEMS_URL =
      "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=PLzPF0KoaO7yRbEeXi5ddVoCh9X6hTdn15&key=AIzaSyDq3qzWOBPPMtUEsTqanIaakfU-uM0CRvs&maxResults=50";

    try {
      const result = await axios.get(YOUTUBE_DATA_V3_PLAYLIST_ITEMS_URL);
      console.log("Get Youtube Data:", result);

      setAlumnis(
        result?.data?.items?.reverse()?.map((video) => ({
          name: video?.snippet?.title,
          message: video?.snippet?.title,
          videoId: video?.contentDetails?.videoId,
          image: video?.snippet?.thumbnails?.high?.url,
        }))
      );
    } catch (e) {
      console.log("Error occurred while fetching Youtube Data:", e);
    }
  }

  useEffect(() => {
    animation.start({
      y: 100,
    });
  }, [animation]);

  useEffect(() => {
    if (inView === true) {
      animation.start({
        y: 0,
        transition: {
          duration: 2,
        },
      });
    }
    if (inView === false) {
      animation.start({
        y: 100,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView,animation]);

  const handleQuerySubmit = async (e) => {
    e.preventDefault();

    // first name -> no number
    if (isNaN(formValues.firstName) === false) {
      alert("First name cannot be a number");
      return;
    }

    // last name -> no number
    if (isNaN(formValues.lastName) === false) {
      alert("Last name cannot be a number");
      return;
    }

    // phone number not more than 10 digits
    if (formValues.phoneNumber.length !== 10) {
      alert("Phone number must be of 10 digits");
      return;
    }

    if (otpVerified) {
      try {
        const res = await postQuery(formValues, "Home");
        console.log(res.data);
        // alert("query Submitted successfully");
        setResponseSent(true);
        setOtpVerified(false);

        alert("Enquiry sent successfully");
        router.push("/thank-you");

        gaCTA("Home Page - Send Query");
      } catch (e) {
        if (
          e?.response?.data?.data == "Query with same details already exist"
        ) {
          alert(e?.response?.data?.data);
        }
      }
    }
  };

  async function sendOTPToPhoneNumber(phoneNumber) {
    // Validation
    if (!phoneNumber || (phoneNumber && phoneNumber.length != 10)) {
      alert("Phone number is not valid");
      return;
    }

    try {
      const result = await sendOTP(phoneNumber);
      console.log("Send OTP: Response", result);

      // Show field for entering OTP
      setShowOtpField(true);
      setShowSendOtp(false);

      gaCTA("Home Page - Send OTP");
    } catch (e) {
      alert("Some error occurred while sending OTP");
      console.log(e);
    }
  }

  async function verifyOTPForPhoneNumber(phoneNumber, userOtp) {
    // Validation
    if (!phoneNumber || (phoneNumber && phoneNumber.length != 10)) {
      alert("Phone number format is not valid");
      return;
    }

    if (!userOtp || userOtp.length != 4) {
      alert("OTP format is not valid");
      return;
    }

    try {
      const result = await verifyOTP(phoneNumber, userOtp);

      if (result?.data?.Status == "Success") {
        alert("OTP Verified Successfully");

        setOtpVerified(true);
        setShowOtpField(false);

        gaCTA("Home Page - Verified OTP");
      } else {
        alert("OTP is Incorrect");
      }

      console.log("Verify OTP: Response", result);
    } catch (e) {
      alert("Some error occurred while verifying OTP");
      console.log(e);
    }
  }

  return (
    <main>
      <section>
        <div className="position-relative hero-section">
          <Navbar className="position-absolute " />
          <Carousel
            showStatus={false}
            showIndicators={false}
            className=" no-thumbs"
            autoPlay={true}
            verticalSwipe="natural"
            swipeScrollTolerance={100}
            preventMovementUntilSwipeScrollTolerance
            infiniteLoop={true}
          >
            {homeSliderData.map((item, index) => (
              <div className="position-relative" key={index}>
                <Image
                  priority={true}
                  src={size.width < 900 ? item.mobileImage : item.desktopImage}
                  layout="responsive"
                  alt=""
                />
                <div
                  className="position-absolute w-100 h-100 bg-blur"
                  style={{ top: 0 }}
                >
                  <div className="container h-100 text-start d-flex flex-column justify-content-between justify-content-md-center text-white ">
                    <div style={{ minHeight: 30 }} />
                    <div>
                      <motion.div
                        initial={{
                          y: 200,
                        }}
                        animate={{ y: 20 }}
                        transition={{ duration: 1, type: "spring" }}
                        exit={{
                          y: -200,
                        }}
                      >
                        <h1
                          className={` ${item.additionalClass}  home-slider-heading fw-bold text-md-start `}
                          dangerouslySetInnerHTML={{ __html: item.h1 }}
                        />
                      </motion.div>
                      <motion.div
                        initial={{
                          x: -300,
                        }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.7 }}
                        exit={{
                          x: -300,
                        }}
                      >
                        <p
                          style={{ maxWidth: 600 }}
                          className={`${item.text2class}   text-md-start home-slider-text m-0 mt-4 mt-md-5 fw-bold`}
                        >
                          {item.lorem}
                        </p>
                        <p
                          style={{ maxWidth: 600 }}
                          className={`${item.text3class} text-md-start home-slider-text m-0`}
                        >
                          {item.lorem2}
                        </p>
                      </motion.div>
                    </div>
                    <div className="hero-button-container mb-3 mb-md-0 ">
                      <FillUpButton
                        className={` ${item.buttonClass} pt-0 pb-0 shadow-lg me-0 me-md-4`}
                        text={item.b1}
                        onClick={() => {
                          gaCTA("Home Page - Know More");
                          router.push(`/${item.knowButtonLink}`);
                        }}
                      />
                      <FillUpButton
                        className={` ${item.buttonClass} pt-0 pb-0 shadow-lg me-md-4`}
                        text={item.b2}
                        onClick={() => {
                          gaCTA("Home Page - Apply Now");
                          router.push(`/contact-us`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/*courses section*/}
      <section>
        <div className="wrapper  py-5" ref={ref}>
          <h1 className="home-heading fw-bold text-center">Courses</h1>
          <h1 className="home-heading-2 text-theme fw-bold  text-center ">
            That Inspire.
          </h1>
          <div className="courses-container-mobile mt-5">
            {HomeCoursesData.map((item, idx) => (
              <CourseMobileCard
                link={item.link}
                containerClass="my-4"
                key={idx}
                title={item.title}
                subtitle={item.subtitle}
                iconImage={item.icon}
              />
            ))}
          </div>
          <motion.div
            className=" justify-content-between my-5 mx-2 py-5 courses-container no-scrollbar courses-container-desktop "
            animate={animation}
          >
            {HomeCoursesData.map((item, idx) => (
              <FlipCards
                link={item.link}
                key={idx}
                title={item.title}
                subtitle={
                  idx === HomeCoursesData.length - 1
                    ? `Certificate in </br> Live Sound`
                    : item.subtitle
                }
                data={item.data}
                bgImage={item.bgImage}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {/*contact form section*/}
      <section className="d-flex home-form-wrapper ">
        <div className="col-md-6" />
        <div className="col-md-6 px-3 ps-md-5 py-5 bg-tint-50">
          <h1 className="text-white" style={{ maxWidth: 600 }}>
            {EN.HOME_FORM_HEADING}
            <span className="text-theme">{EN.HOME_FORM_HEADING_HIGHLIGHT}</span>
          </h1>
          <form
            className="my-4 home-contact-form "
            onSubmit={handleQuerySubmit}
          >
            <div className="  text-white my-5">
              <label htmlFor="home-form-fname">First Name</label>
              <input
                id="home-form-fname"
                type="text"
                required
                placeholder="Enter First Name"
                className="form-control bg-transparent text-white"
                onChange={(e) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
              />
            </div>
            <div className="  text-white my-5">
              <label htmlFor="home-form-lname">Last Name</label>
              <input
                id="home-form-lname"
                type="text"
                required
                placeholder="Enter Last Name"
                className="form-control bg-transparent text-white"
                onChange={(e) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
              />
            </div>
            <div className="  text-white my-5">
              <label htmlFor="home-form-email">Email Address</label>
              <input
                id="home-form-email"
                type="email"
                required
                placeholder="Enter Email "
                className="form-control bg-transparent text-white"
                onChange={(e) =>
                  setFormValues({ ...formValues, emailAddress: e.target.value })
                }
              />
            </div>
            <div className="  text-white my-5">
              <label htmlFor="home-form-phone">Phone Number</label>
              <div className="d-flex">
                <input
                  id="home-form-phone"
                  type="number"
                  minLength={10}
                  required
                  placeholder="Enter Phone Number"
                  className="form-control bg-transparent text-white"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      phoneNumber: e.target.value,
                    })
                  }
                />
                {showSendOtp && (
                  <FillUpButton
                    onClick={() => sendOTPToPhoneNumber(formValues.phoneNumber)}
                    className="me-0 ms-2"
                    style={{ height: 46 }}
                    text="Send OTP"
                  />
                )}
              </div>
            </div>

            {showOtpField && (
              <div className="  text-white my-5">
                <label htmlFor="home-form-phone">OTP</label>
                <div className="d-flex">
                  <input
                    id="home-form-phone"
                    type="number"
                    minLength={4}
                    required
                    placeholder="Enter OTP"
                    className="form-control bg-transparent text-white"
                    onChange={(e) => setOtpValue(e.target.value)}
                  />
                  {!otpVerified && (
                    <FillUpButton
                      onClick={() =>
                        verifyOTPForPhoneNumber(
                          formValues.phoneNumber,
                          otpValue
                        )
                      }
                      className="me-0 ms-2"
                      style={{ height: 46 }}
                      text="Verify"
                    />
                  )}
                </div>
              </div>
            )}

            {otpVerified && (
              <FillUpButton className=" me-0 me-md-4" text="Send Query" />
            )}
            {/* {responseSent && <div style={{ width: "100%" }} className={`p-2 px-3 fillup-btnStyle`}>Thanks For Your Response</div>} */}
          </form>
        </div>
      </section>

      <section className="pt-5" id="reviews">
        <div className="container ">
          <h1 className="home-heading  fw-bold text-center text-center ">
            Here is what people say about
          </h1>
          <h1 className="home-heading-2 text-theme fw-bold text-center ">
            The Audio Guys.
          </h1>
          <div style={{
            position: "relative"
          }}>
            <div style={{
              width: "100%",
              height: "80px",
              position: "absolute",
              zIndex: 999,
              bottom: 0,
            }} className="bg-white" ></div>
            <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
            <div className="elfsight-app-64b6d949-4047-4249-933f-e49e8076d17e" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      <section className="text-center bg-black py-5">
        <div className="py-3 pb-4">
          <h1 className="text-white fw-bold">Our Alumnis</h1>
          <h1 className="text-danger fw-bold">That Really Shine</h1>
        </div>

        <Carousel
          showStatus={false}
          showIndicators={false}
          className="alumni-mobile-carousel"
          autoPlay={false}
          verticalSwipe="natural"
          swipeScrollTolerance={100}
          preventMovementUntilSwipeScrollTolerance
          infiniteLoop={true}
        // showArrows={false}
        >
          {alumnis && alumnis?.length > 0 ? (
            alumnis.map((item, idx) => (
              <>
                <AlumniCarouselMobileItem key={idx} item={item} />
                <div className="mb-2 py-3">
                  <h4 className="text-center fw-bold text-white">
                    {item.name}
                  </h4>
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </Carousel>
        {alumnis && alumnis?.length > 0 ? (
          <AlumniCarousel
            data={alumnis?.map((testimonial, idx) => ({
              order: idx + 1,
              name: testimonial?.name,
              message: testimonial?.message,
              img: testimonial?.image,
              videoId: testimonial?.videoId,
            }))}
          />
        ) : (
          <></>
        )}
      </section>

      <section className="py-5" id="reviews">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="home-heading-2 fw-bold text-center text-center">
            Our <span className="text-theme">Placement Partners</span>
          </h1>
          <div className="mt-4 d-flex flex-wrap justify-content-center">
            {placements.map((placementImg, idx) => (
              <Image
                alt="placement img"
                width={size?.width < 900 ? 140 : 200}
                height={size?.width < 900 ? 140 : 200}
                key={idx}
                className="m-3 placement-img"
                src={placementImg}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}
