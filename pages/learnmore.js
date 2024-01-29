import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import { homeSliderData } from "../constants/homeData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useWindowSize } from "../utils/WindowHook";
import FillUpButton from "../components/FillUpButton";
import { postQuery } from "../services/query.service";
import AccordionGroup from "../components/AccordionGroup";
import { motion, useAnimation } from "framer-motion";
import FlipCards from "../components/FlipCards";
import { useRouter } from "next/router";
import { HomeCoursesData } from "../constants/homeData";
import CourseMobileCard from "../components/CourseMobileCard";
import Select from "react-select";
import { sendOTP, verifyOTP } from "../services/otp.service";
import { gaCTA } from "../utils/analytics";

const contactPageFaqs = [
  {
    question: "What is SOUND ENGINEERING?",
    answer:
      "<p>A sound engineer is someone who is responsible for the recording and reproduction of any and all things in audio. They participate in various industries like music, films, games, live shows, home/office automations to name a few. You can also learn about future technologies like virtual and augmented reality exclusively at TAG Institute.<br /> <br />Sound industry has been on a rise ever since entertainment has become an integral part of living for us. A Sound Engineer is the only link between the artistic and the technological side of all entertainment industry. We at TAG teach you both theoretical and practical applications in our diploma courses.</p>",
  },
  {
    question: "What is MUSIC PRODUCTION?",
    answer:
      "<p>A Music Producer is responsible for creating and designing any and all sounds that you can hear in a song. A music producers&#39; role lies between the composer of the song and the sound engineer of the song. Modern practices require a music producer to have in-depth knowledge of music theory and instruments as well as solid foundation of sound engineering. Music industry has been reaching new heights ever since the internet has become a human right. Youtube and music streaming has proven to be the fuel to this fire.<br /><br />At TAG we don&#39;t just teach you these techniques, we expose our students to professionals who are some of the biggest names of independent and mainstream industry. We believe that music theory is still the epicenter of music production education but the modern day music producers also need industry exposure and music business skills to start their career in today&#39;s industry.</p>",
  },
  {
    question: "What is the Sound and Music Industry?",
    answer:
      "<p>The music and sound industry and its professionals help artists create professional sounding songs for films, OTT streaming and other platforms. These involve many professionals which helps the artist capture (recording) edit, balance the sound and textures to help deliver a professional sounding song to the listeners.<br />Similarly, sound department for films require dozens of professionals to help record and deliver a top quality sounding film</p>",
  },
  {
    question: "What courses are offered",
    answer:
      '<p>At TAG institute we offer the following courses</p><ul><li><a class="text-white" href="https://www.tagmumbai.com/mumbai/sound-engineering-course">One Year diploma course in sound engineering</a>&nbsp;(Sound for music, films and live shows)</li><li><a class="text-white" href="https://www.tagmumbai.com/mumbai/music-production-course">One year diploma course in music production</a>&nbsp;(music making and releasing)</li><li><a class="text-white" href="https://www.tagmumbai.com/courses/acmp">6 months advanced certificate in music production</a></li><li><a class="text-white" href="https://www.tagmumbai.com/courses/caap">3 months advanced certificate in post production</a</li></ul>',
  },
  {
    question: "Who are the Faculties",
    answer:
      '<p>TAG Institute is proud to present the most critically and professionally acclaimed faculty. They are real world professionals who are some of the best at what they do and actively take out time to teach exclusively at TAG Institute.&nbsp;<a href="https://www.tagmumbai.com/faculty">click here</a>&nbsp;to know more</p>',
  },
  {
    question: "How much does it cost",
    answer:
      "A detailed structure is mentioned in our prospectus which can be accessed by filling up the form above.",
  },
];

const AboutPage = () => {
  const animation = useAnimation();

  const [otpValue, setOtpValue] = React.useState("");
  const [otpVerified, setOtpVerified] = React.useState(false);
  const [showSendOtp, setShowSendOtp] = React.useState(true);
  const [showOtpField, setShowOtpField] = React.useState(false);
  const [responseSent, setResponseSent] = React.useState(false);

  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    city: "",
  });

  const courses = [
    { label: "Diploma in Sound Engineering", value: "DSE" },
    { label: "Diploma in Music Production", value: "DMP" },
    { label: "Certificate in Advanced Audio Production", value: "CAAP" },
    { label: "Certificate in Advanced Music Production", value: "CAMP" },
    { label: "Certificate in Live Sound", value: "CLS" },
  ];

  const [selectedCourse, setSelectedCourse] = useState(courses[0].value);

  useEffect(
    () => console.log("selectedCourse", selectedCourse),
    [selectedCourse]
  );

  const size = useWindowSize();

  const router = useRouter();

  const handleRequestProspectus = async (e) => {
    e.preventDefault();
    try {
      // if (otpVerified == false) {
      //   return;
      // }

      const body = { ...formValues, enquiry: selectedCourse };
      console.log("formmm", body);
      const res = await postQuery(body, "Landing");
      console.log(res.data);
      // alert("Enquiry sent successfully");
      router.push("/thank-you");
    } catch (e) {
      console.log(e);
    }
  };

  const coursesStyle = {
    option: (provided) => ({
      ...provided,
      background: "black",
      color: "white",
    }),
    control: (provided) => ({
      ...provided,
      background: "transparent",
      color: "white",
    }),
    singleValue: (provided) => ({
      ...provided,
      background: "transparent",
      color: "white",
    }),
    // control: styles => ({ ...styles, backgroundColor: 'none', color: 'white' }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = "#ff0000";
    //   return {
    //     ...styles,
    //     backgroundColor: isDisabled ? 'red' : 'black',
    //     color: '#FFF',
    //     cursor: isDisabled ? 'not-allowed' : 'default',
    //   };
    // },
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

  return (
    <>
      <Head>
        <title>Learn More - The Audio Guys (TAG) Institute | Mumbai</title>

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

      <main className="">
        <section>
          <div className="position-relative hero-section">
            <Navbar learnmore={true} className="position-absolute " />
          </div>
        </section>

        <section
          className="d-flex home-form-wrapper flex-wrap "
          style={{ paddingTop: 42 }}
        >
          <div className="col-md-6 text-white d-flex text-center text-md-start flex-column justify-content-center">
            <h1 className="display-1 fw-bold mb-3 p-4 pt-0 mt-5 mb-md-0">
              <span className="text-theme">About</span> Us
            </h1>
            <p className="about-us-paragraph p-4">
              Music making and sound technologies have changed drastically in
              the last decade, it’s education has not. TAG Institute, a
              well-equipped and highly renowned music school in Mumbai, offers
              future music makers and sound engineers a pathway to learn skills
              like
              <br />
              1. Immersive Audio (Dolby ATMOS) <br />
              Music making for films and web series <br />
              2. Composing music for songs, composing background scores with the
              help of advanced techniques orchestral music production and
              synthesis <br />
              3. Music business and entrepreneurship for the future digital
              artists <br />
              4. Live sound concert training with equipment from Digico, DNB
              speakers, sennheiser and more <br />
              Learn the modern way with Industry legends like Shadab Rayeen,
              Sreejesh Nair, Justin Jose and others across 5 world-class
              studios, a 10,000 sqft exclusive audio learning campus, digital
              classrooms and more
            </p>
          </div>

          <div className="col-md-6 px-3 ps-md-5 py-5 bg-tint-50">
            <h1 className="text-white" style={{ maxWidth: 700 }}>
              Jumpstart your career in the sound industry
              <span className="text-theme ms-2">starting today.</span>
            </h1>
            <form
              className="my-4 home-contact-form "
              onSubmit={handleRequestProspectus}
            >
              <div className="  text-white my-3">
                <label htmlFor="home-form-fname">First Name *</label>
                <input
                  id="home-form-fname"
                  type="text"
                  required
                  placeholder="Enter First Name"
                  className="form-control bg-transparent text-white"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="  text-white my-3">
                <label htmlFor="home-form-lname">Last Name *</label>
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
              <div className="  text-white my-3">
                <label htmlFor="home-form-email">Email Address *</label>
                <input
                  id="home-form-email"
                  type="email"
                  required
                  placeholder="Enter Email "
                  className="form-control bg-transparent text-white"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      emailAddress: e.target.value,
                    })
                  }
                />
              </div>
              <div className="text-white my-3">
                <label htmlFor="home-form-phone">Phone Number *</label>
                <div className="d-flex">
                  <input
                    id="home-form-phone"
                    type="tel" // Change type to "tel" for better mobile support
                    minLength={10}
                    maxLength={10}
                    required
                    placeholder="Enter Phone Number"
                    className="form-control bg-transparent text-white"
                    onChange={(e) => {
                      const inputPhoneNumber = e.target.value;

                      if (inputPhoneNumber.length <= 10) {
                        setFormValues({
                          ...formValues,
                          phoneNumber: inputPhoneNumber,
                        });
                      }
                    }}
                  />
                  {/* {showSendOtp && (
                        <FillUpButton
                          onClick={() => sendOTPToPhoneNumber(formValues.phoneNumber)}
                          className="me-0 ms-2"
                          style={{ height: 46 }}
                          text="Send OTP"
                        />
                    )} */}
                </div>
              </div>

              {/* {showOtpField && (
                <div className="text-white my-3">
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

              <div className="text-white my-3">
                <label htmlFor="home-form-city">City *</label>
                <div className="d-flex">
                  <input
                    id="home-form-city"
                    type="text"
                    required
                    placeholder="Enter City"
                    className="form-control bg-transparent text-white"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="text-white my-3">
                <label htmlFor="home-form-phone">Enquiry</label>
                <Select
                  styles={coursesStyle}
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={courses[0]}
                  isClearable={false}
                  options={courses}
                  onChange={(e) => setSelectedCourse(e.value)}
                />

                {/* {otpVerified && <FillUpButton style={{ width: "100%" }} className=" me-0 me-md-4" text="Download Prospectus" />} */}
                {/* {responseSent && <div style={{ width: "100%" }} className={`p-2 px-3 fillup-btnStyle`}>Thanks For Your Response</div>} */}
                {/* <div className="d-flex">
                    <input
                      id="home-form-enquiry"
                      type="text"
                      required
                      placeholder="Enter Enquiry"
                      className="form-control bg-transparent text-white"
                      // onChange={(e) =>
                      //   setFormValues({
                      //     ...formValues,
                      //     enquiry: e.target.value,
                      //   })
                      // }
                    />
                  </div> */}
              </div>
              <FillUpButton className=" me-0 me-md-4" text="Send Enquiry" />
            </form>
          </div>
        </section>

        <div className="bg-white">
          <section>
            <div className="wrapper py-5">
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
                    subtitle={item.subtitle}
                    data={item.data}
                    bgImage={item.bgImage}
                    learnmore
                  />
                ))}
              </motion.div>
            </div>
          </section>

          <section
            className="d-flex home-form-wrapper flex-wrap"
            style={{ paddingTop: 0 }}
          >
            <div className="col-md-6 text-white d-flex text-center text-md-start flex-column justify-content-center align-items-center">
              <h1 className="display-3 fw-bold mb-3 p-4 pt-0 mt-5 mb-md-0">
                <span className="text-theme">
                  Who is this
                  <br />
                </span>{" "}
                course for.
              </h1>
              <p className="about-us-paragraph p-4">
                A budding musician, an aspiring sound enthusiast looking to make
                a career in sound and more. All courses at The Audio Guys
                Insitute are catered towards Sound and Music. We offer the most
                advanced courses in Sound Engineering and Music Production with
                integration of technologies like Dolby Atmos, Live Concert
                Systems Engineering, Sound for VR and more. Music production
                students also get their own arsenal of advance theories with
                writing for orchestras, Analog sysnthesis, contemporary song
                writing and much more. The best part about us? We teach all of
                this with industry leading professionals who work with likes of
                Bhuvan Bam, Amit Trivedi, Pritam, Zakir Hussain, Atif Aslam and
                more. <br />
                All offerings of studio and other facilities are inclusive in
                the course fee and there are no hidden charges at The Audio Guys
                Institute.
              </p>
            </div>

            <div className="col-md-6 px-3 ps-md-5 py-5 bg-tint-50 text-center">
              <div className="m-5 border border-2 border-white my-auto">
                <h2 className="text-theme mt-5" style={{ maxWidth: 700 }}>
                  Format
                </h2>
                <h4 className="text-white mb-5" style={{ maxWidth: 700 }}>
                  Offline
                </h4>

                <h2 className="text-theme" style={{ maxWidth: 700 }}>
                  Duration
                </h2>
                <h4 className="text-white mb-5" style={{ maxWidth: 700 }}>
                  12 months
                </h4>

                <h2 className="text-theme" style={{ maxWidth: 700 }}>
                  Total Sessions
                </h2>
                <h4 className="text-white mb-5" style={{ maxWidth: 700 }}>
                  150+
                </h4>

                <h2 className="text-theme" style={{ maxWidth: 700 }}>
                  Studio Bookings
                </h2>
                <h4 className="text-white mb-5" style={{ maxWidth: 700 }}>
                  Minimum 500 hours across 5 studios per student
                </h4>

                <h2 className="text-theme" style={{ maxWidth: 700 }}>
                  Intake
                </h2>
                <h4 className="text-white mb-5" style={{ maxWidth: 700 }}>
                  Every 3 months
                </h4>

                <h2 className="text-theme" style={{ maxWidth: 700 }}>
                  EMI and Fee Assistance
                </h2>
                <h4 className="text-white" style={{ maxWidth: 700 }}>
                  Available
                </h4>
                <h6
                  className="text-white mb-5"
                  style={{ fontStyle: "italic", maxWidth: 700 }}
                >
                  (Please fill out the enquiry form above and our team will get
                  in touch with you.)
                </h6>
              </div>
            </div>
          </section>

          <section className="contact-faq " id="faq">
            <div className=" h-100 bg-tint-60 py-5">
              <div className=" container h-100 py-5 text-white d-flex flex-column justify-content-center ">
                <h1 className="display-1 fw-bold mb-3 mb-md-2">
                  Frequently Asked <span className="text-theme">Questions</span>
                </h1>
                <AccordionGroup
                  accordionContainerClass="para-text"
                  data={contactPageFaqs}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
