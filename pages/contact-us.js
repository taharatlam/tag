import React, { useEffect, useRef, useState } from "react";
import { sendOTP, verifyOTP } from "../services/otp.service";

import AccordionGroup from "../components/AccordionGroup";
import ContactUsMap from "../components/ContactUsMap";
import FillUpButton from "../components/FillUpButton";
import Footer from "../components/Footer";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { gaCTA } from "../utils/analytics";
import { postQuery } from "../services/query.service";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useRouter } from "next/router";

const contactPageFaqs = [
  {
    question: "What is SOUND ENGINEERING?",
    answer:
      "A sound engineer is someone who is responsible for the recording and reproduction of any and all things in audio. They participate in various industries like music, films, games, live shows, home/office automations to name a few. You can also learn about future technologies like virtual and augmented reality exclusively at TAG institute. <br/> Sound industry has been on a rise ever since entertainment has become an integral part of living for us. A Sound engineer is the only link between the artistic and the technological side of all entertainment industry. We at TAG teach you both theoretical and practical applications in our diploma courses.",
  },
  {
    question: "What is MUSIC PRODUCTION?",
    answer:
      "A music producer is responsible for creating and designing any and all sounds that you can hear in a song. A music producers' role lies between the composer of the song and the sound engineer of the song. Modern practices require a music producer to have in-depth knowledge of music theory and instruments as well as solid foundation of sound engineering. Music industry has been reaching new heights ever since the internet has become a human right. Youtube and music streaming has proven to be the fuel to this fire. <br/> At TAG we don't just teach you these techniques, we expose our students to professionals who are some of the biggest names of independent and mainstream industry. We believe that music theory is still the epicenter of music production education but the modern day music producers also need industry exposure and music business skills to start their career in today's industry.",
  },
];

const ContactPage = () => {
  const [otpValue, setOtpValue] = React.useState("");
  const [otpVerified, setOtpVerified] = React.useState(true); // temp verified by default
  const [showSendOtp, setShowSendOtp] = React.useState(true);
  const [showOtpField, setShowOtpField] = React.useState(false);
  const [responseSent, setResponseSent] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blockScroll, setBlockScroll] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleRequestProspectus = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
        const res = await postQuery(formValues, "Prospectus");
        console.log(res.data);
        alert("Prospectus Downloaded Successfully");

        setResponseSent(true);
        // setOtpVerified(false);

        gaCTA("Contact Page - Prospectus Downloaded");

        window.location.href =
          "https://taginstitute-my.sharepoint.com/:b:/g/personal/webdev_taginstitute_in/EY2ndEqF0vxNh0mWxdbJGucB6fXKubzfP4xYPgEtRBJNEQ?e=VyV8Yh";
      } catch (e) {
        if (
          e?.response?.data?.data == "Query with same details already exist"
        ) {
          alert(e?.response?.data?.data);
          window.location.href =
            "https://taginstitute-my.sharepoint.com/:b:/g/personal/webdev_taginstitute_in/EY2ndEqF0vxNh0mWxdbJGucB6fXKubzfP4xYPgEtRBJNEQ?e=VyV8Yh";
        }
      }
    }
    setIsLoading(false);
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

      gaCTA("Contact Page - Send OTP");
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

        gaCTA("Contact Page - Verified OTP");
      } else {
        alert("OTP is Incorrect");
      }

      console.log("Verify OTP: Response", result);
    } catch (e) {
      alert("Some error occurred while verifying OTP");
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("blockScroll", blockScroll);
  }, [blockScroll]);

  const toggleBlockScroll = () => {
    setBlockScroll(true);
  };

  const toggleAllowScroll = () => {
    setBlockScroll(false);
  };

  const ref = useDetectClickOutside({ onTriggered: toggleAllowScroll });

  const prospectusRef = useRef();
  const contactSection = useRef();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact us - The Audio Guys (TAG) Institute | Mumbai</title>

        <meta
          property="og:site_name"
          content="The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          property="og:title"
          content="Contact us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          property="og:url"
          content="https://www.tagmumbai.com/contact-us"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="184" />
        <meta
          itemProp="name"
          content="Contact us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta itemProp="url" content="https://www.tagmumbai.com/contact-us" />
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
          content="Contact us - The Audio Guys (TAG) Institute | Mumbai"
        />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"
        />
        <meta
          name="twitter:url"
          content="https://www.tagmumbai.com/contact-us"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content="" />
      </Head>

      <main style={{ overscrollBehavior: "contain" }}>
        <section className="contact-image-2 vh-100">
          <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className="h-100">
            <Navbar />
            <div className="container h-100 text-white p-5 text-center d-flex flex-column align-items-center justify-content-center ">
              <h1 className="home-slider-heading fw-bold pt-4">Start your</h1>
              <h1 className="home-slider-heading fw-bold text-theme">
                career today
              </h1>
              <h4>
                because passion needs <br /> the right education.
              </h4>
              <div className="my-5 pt-5">
                <h4>Lets Connect!</h4>
                <div className="d-flex gap-4 justify-content-center flex-wrap">
                  <FillUpButton
                    style={{ width: 200 }}
                    text="CONTACT US"
                    downArrow
                    onClick={() => router.push("/contact-us#contact")}
                  />

                  <FillUpButton
                    style={{ width: 250 }}
                    text="REQUEST A PROSPECTUS"
                    downArrow
                    onClick={() => router.push("/contact-us#prospectus")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="campus-section-1">
          <section id="contact" className=" " ref={contactSection}>
            <div className="h-100 row m-0 blur-5 ">
              <div className="col-md-6 py-5 d-flex flex-column justify-content-center align-items-center text-white text-center ">
                <h1 className="text-shadow">CONTACT US</h1>
                <h5 className="text-shadow">
                  Contact us at the following detail
                  <br />
                  so that we can get back to you.
                </h5>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center bg-tint-50 px-5 py-5">
                <div className="text-white">
                  <div
                    className="rounded-4"
                    onClick={toggleBlockScroll}
                    onPointerEnter={() => toggleBlockScroll}
                    onPointerLeave={() => toggleAllowScroll}
                    ref={ref}
                  >
                    <ContactUsMap
                      toggleBlockScroll={toggleBlockScroll}
                      toggleAllowScroll={toggleAllowScroll}
                      google
                    />
                  </div>
                  <div className="my-4 text-center text-md-start">
                    <h4>ADDRESS</h4>
                    <p>
                      Plot-23, 1st Floor Shah, Industrial Area, Andheri West,
                      Mumbai, Maharashtra 400053
                    </p>
                  </div>
                  <div className="row gap-4 gap-md-0">
                    <div className="col-sm-6 text-center text-md-start">
                      <h4 className="">EMAIL</h4>
                      <a
                        className="text-white text-decoration-none"
                        href="mailto:info@taginstitute.in"
                      >
                        info@taginstitute.in
                      </a>
                    </div>
                    <div className="col-sm-6 text-center text-md-start">
                      <h4>CONTACT NUMBER</h4>

                      <a
                        href="tel:+917021906464"
                        className="text-white text-decoration-none"
                      >
                        (+91) 7021906464{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="prospectus"
            className=""
            style={{ minWidth: "100vw" }}
            ref={prospectusRef}
          >
            <div className="row  m-0 blur-5">
              <div className="col-md-6 py-5 d-flex flex-column justify-content-center align-items-center text-white text-center ">
                <h1 className="text-shadow">
                  REQUEST A <br /> PROSPECTUS
                </h1>
                <h5 className="text-shadow">
                  Confused about what <br />
                  career to choose{" "}
                </h5>
              </div>
              <div className="col-md-6 py-5 bg-tint-50 px-5 d-flex justify-content-center ">
                <form
                  className="my-4 home-contact-form "
                  onSubmit={handleRequestProspectus}
                >
                  <div className="  text-white my-4">
                    <label htmlFor="home-form-fname">First Name</label>
                    <input
                      id="home-form-fname"
                      type="text"
                      required
                      placeholder="Enter First Name"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          firstName: e.target.value,
                        })
                      }
                      className="form-control bg-transparent text-white"
                    />
                  </div>
                  <div className="  text-white my-4">
                    <label htmlFor="home-form-lname">Last Name</label>
                    <input
                      id="home-form-lname"
                      type="text"
                      required
                      placeholder="Enter Last Name"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          lastName: e.target.value,
                        })
                      }
                      className="form-control bg-transparent text-white"
                    />
                  </div>
                  <div className="  text-white my-4">
                    <label htmlFor="home-form-email">Email Address</label>
                    <input
                      id="home-form-email"
                      type="email"
                      required
                      placeholder="Enter Email "
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          emailAddress: e.target.value,
                        })
                      }
                      className="form-control bg-transparent text-white"
                    />
                  </div>

                  <div className="  text-white my-4">
                    <label htmlFor="home-form-phone">Phone Number</label>
                    <div className="d-flex">
                      <input
                        id="home-form-phone"
                        type="number"
                        minLength={10}
                        required
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            phoneNumber: e.target.value,
                          })
                        }
                        placeholder="Enter Phone Number"
                        className="form-control bg-transparent text-white"
                      />
                      <FillUpButton
                        disabled={isLoading}
                        // onClick={() =>
                        //   verifyOTPForPhoneNumber(
                        //     formValues.phoneNumber,
                        //     otpValue
                        //   )
                        // }
                        className="me-0 ms-2"
                        style={{ height: 46 }}
                        text="Submit"
                        type="submit"
                      />
                      {/* {showSendOtp && (
                        <FillUpButton
                          onClick={() =>
                            sendOTPToPhoneNumber(formValues.phoneNumber)
                          }
                          className="me-0 ms-2"
                          style={{ height: 46 }}
                          text="Send OTP"
                        />
                      )} */}
                    </div>
                  </div>

                  {/* {showOtpField && (
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
                  )} */}

                  {/* {otpVerified && (
                    <FillUpButton
                      style={{ width: "100%" }}
                      className=" me-0 me-md-4"
                      text="Download Prospectus"
                    />
                  )} */}
                  {responseSent && (
                    <div
                      style={{ width: "100%" }}
                      className={`p-2 px-3 fillup-btnStyle`}
                    >
                      Thanks For Your Response
                    </div>
                  )}
                  {/* <FillUpButton
                style={{ width: 250 }}
                type="submit"
                text="Download Prospectus"
              /> */}
                </form>
              </div>
            </div>
          </section>
        </div>

        <section className="contact-faq " id="faq">
          <div className=" h-100 bg-tint-60 py-5">
            <div className=" container h-100 py-5 text-white d-flex flex-column justify-content-center ">
              <AccordionGroup
                large
                accordionContainerClass="para-text"
                data={contactPageFaqs}
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default ContactPage;
