import React, { useCallback, useState } from "react";

import AccordionGroup from "./AccordionGroup";
import { AnimatePresence } from "framer-motion";
import EligibilityDialog from "./EligibilityDialog";
import FillUpButton from "./FillUpButton";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import ParticleJSON from "../public/assets/particle.json";
import Particles from "react-tsparticles";
import Select from "react-select";
import { gaCTA } from "../utils/analytics";
import { loadFull } from "tsparticles";
import { postQuery } from "../services/query.service";
import { useRouter } from "next/router";

function CourseBubble(item) {
  return (
    <div className=" d-flex justify-content-center align-items-center course-bubble-container  ">
      <div className="course-bubble">
        <p>{item.text}</p>
      </div>
    </div>
  );
}

const CoursesPage = ({ data, background }) => {
  const [showEligibilityDialog, setShowEligibilityDialog] = useState(false);
  const [termIndex, setTermIndex] = useState(0);
  const [formValues, setFormValues] = useState({
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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const router = useRouter();

  const coursesStyle = {
    option: (provided) => ({
      ...provided,
    }),
    control: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        border: "none",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
    }),
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { ...formValues, enquiry: selectedCourse };
      console.log("formmm", body);
      const res = await postQuery(body, "Landing");
      console.log(res.data);
      router.push("/thank-you");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <main className="">
        <section
          className={
            background == "dse"
              ? "courses-bg-dse"
              : background == "dmp"
              ? "courses-bg-dmp"
              : background == "acmp"
              ? "courses-bg-acmp"
              : "courses-bg-acpp"
          }
        >
          <div className="bg-tint-50">
            <Navbar className="" />
            <div className="">
              <div className="container py-5 text-white  ">
                <h1
                  className="  home-slider-heading fw-bold text-center text-md-start "
                  dangerouslySetInnerHTML={{ __html: data?.title }}
                />
                <p className=" text-center text-md-start para-text text-white ">
                  TAG INSTITUTE PROGRAM CODE: {data?.programCode}
                </p>
                <div className="py-4  ">
                  <p
                    className="m-0  text-center text-md-start para-text "
                    dangerouslySetInnerHTML={{ __html: data?.summary }}
                  />
                </div>
                <div className="d-flex flex-wrap gap-5">
                  <div
                    className="border border-white d-block d-md-inline py-2 px-3 mx-auto text-center mx-4 mx-md-0"
                    style={{ borderRadius: 10 }}
                  >
                    DURATION - {data?.duration}
                  </div>
                  <FillUpButton
                    className="mx-md-0 mx-auto d-block d-md-inline m-0 "
                    style={{ width: 250, height: 42 }}
                    onClick={() => setShowEligibilityDialog(true)}
                    text="CHECK ELIGIBILITY"
                  />
                </div>
                <AnimatePresence>
                  {showEligibilityDialog ? (
                    <EligibilityDialog
                      close={() => setShowEligibilityDialog(false)}
                    />
                  ) : (
                    ""
                  )}
                </AnimatePresence>

                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white mb-0 position-relative">
          <div className="container py-5">
            {/*<h1 className="mb-3 home-heading  text-center text-md-start fw-semiBold ">*/}
            {/*  Courses <span className="text-theme"> Overview</span>*/}
            {/*</h1>*/}
            {/*<p className="m-0  text-center text-md-start para-text" dangerouslySetInnerHTML={{__html:data?.summary}} />*/}

            <h1 className=" mb-3 mt-5 home-heading   text-center text-md-start fw-semiBold">
              Eligibility for
              <span className="text-theme"> {data?.eligibilityHeading}</span>
            </h1>
            <ul className="para-text theme-bullets">
              {data?.eligibility.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/*<section className="bg-white mb-0">*/}
        {/*  <div className="container py-5">*/}
        {/*    /!*<h1 className="mb-3 home-heading  text-center text-md-start fw-semiBold ">*!/*/}
        {/*    /!*  Courses <span className="text-theme"> Overview</span>*!/*/}
        {/*    /!*</h1>*!/*/}
        {/*    /!*<p className="m-0  text-center text-md-start para-text" dangerouslySetInnerHTML={{__html:data?.summary}} />*!/*/}

        {/*    <h1 className=" mb-3 mt-5 home-heading   text-center text-md-start fw-semiBold">*/}
        {/*      Eligibility for*/}
        {/*      <span className="text-theme"> {data?.eligibilityHeading}</span>*/}
        {/*    </h1>*/}
        {/*    <ul className="para-text theme-bullets">*/}
        {/*      {data?.eligibility.map((item, idx) => (*/}
        {/*          <li key={idx}>{item}</li>*/}
        {/*      ))}*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className="position-relative bg-black ">
          <div
            className="position-absolute       "
            style={{ height: "100%", width: "100vw" }}
          >
            <Particles
              style={{ position: "absolute", height: 100 }}
              init={particlesInit}
              options={ParticleJSON}
              mode="ResponsiveMode"
            ></Particles>
          </div>
          <div className="py-4">
            <div className="">
              <h1 className="home-heading  text-white text-center text-center">
                Booming Career&nbsp;
                <span className="text-theme">Opportunities.</span>{" "}
              </h1>
              <div className=" container justify-content-center d-flex flex-wrap">
                {data?.opportunities.map((item, idx) => (
                  <CourseBubble key={idx} text={item} />
                ))}
              </div>
            </div>
            <div className=" ">
              <h1 className="  home-heading  text-white text-center text-center">
                Course <span className="text-theme">Highlights.</span>
              </h1>
              <div className=" container   justify-content-center d-flex flex-wrap">
                {data?.highlights.map((item, idx) => (
                  <CourseBubble key={idx} text={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
        {data?.curriculum ? (
          <section className="bg-white">
            <div className=" container py-5">
              <h1 className="home-heading text-center text-md-start mb-3 fw-semiBold">
                Course <span className="text-theme">Curriculum.</span>
              </h1>

              <div className="d-flex justify-content-center flex-wrap no-scrollbar mb-2 ">
                {data.curriculum.map((item, idx) => (
                  <FillUpButton
                    key={idx}
                    noTint
                    className=" me-3 pe-2 text-nowrap my-2"
                    style={{ width: 160, height: 42 }}
                    onClick={() => setTermIndex(idx)}
                    text={item.btnName}
                  />
                  // <button
                  //   key={idx}
                  //   className={` text-nowrap  ${
                  //     termIndex == idx
                  //       ? "theme-icon-btn"
                  //       : "theme-icon-btn-outline"
                  //   }   d-flex justify-content-between align-items-center`}
                  //   onClick={() => setTermIndex(idx)}
                  // >
                  //   <div>{item.btnName} </div>
                  //   <FiArrowRight className="ms-3" style={{ strokeWidth: 3 }} />
                  // </button>
                ))}
              </div>

              {data?.curriculum[termIndex]?.btnName == "Assessment" ? (
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.curriculum[termIndex]?.info,
                  }}
                />
              ) : (
                <AccordionGroup
                  data={data?.curriculum[termIndex]?.info}
                  accordionContainerClass="para-text"
                />
              )}
            </div>
          </section>
        ) : (
          ""
        )}

        {data.faqs ? (
          <section className="courses-bg-2">
            <div className="bg-tint-50">
              <div className=" container py-5 text-white">
                <h1 className=" home-heading text-center text-md-start mb-3 fw-semiBold ">
                  Frequently Asked{" "}
                  <span className="text-theme">Questions.</span>
                </h1>
                <AccordionGroup
                  accordionContainerClass="para-text"
                  data={data?.faqs}
                />
              </div>
            </div>
          </section>
        ) : (
          <div></div>
        )}
        <section className="bg-white">
          <div className="container py-5">
            <h1 className="home-heading text-center text-md-start mb-3 ">
              Interested ? <br />{" "}
              <span className="text-theme ">Lets Connect</span>
            </h1>

            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <div className="w-100">
                <form
                  className="course-contact-form"
                  onSubmit={handleContactFormSubmit}
                >
                  <div className="">
                    <label htmlFor="home-form-fname">First Name *</label>
                    <input
                      id="home-form-fname"
                      type="text"
                      required
                      value={formValues.firstName}
                      placeholder="Enter First Name"
                      className="form-control border-dark"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className=" my-3">
                    <label htmlFor="home-form-lname">Last Name *</label>
                    <input
                      id="home-form-lname"
                      type="text"
                      required
                      value={formValues.lastName}
                      placeholder="Enter Last Name"
                      className="form-control border-dark"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className=" my-3">
                    <label htmlFor="home-form-email">Email Address *</label>
                    <input
                      id="home-form-email"
                      type="email"
                      required
                      value={formValues.emailAddress}
                      placeholder="Enter Email "
                      className="form-control border-dark"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          emailAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className=" my-3">
                    <label htmlFor="home-form-phone">Phone Number *</label>
                    <div className="d-flex">
                      <input
                        id="home-form-phone"
                        type="tel"
                        minLength={10}
                        maxLength={10}
                        required
                        value={formValues.phoneNumber}
                        placeholder="Enter Phone Number"
                        className="form-control border-dark"
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
                    </div>
                  </div>

                  <div className="my-3">
                    <label htmlFor="home-form-city">City *</label>
                    <div className="d-flex">
                      <input
                        id="home-form-city"
                        type="text"
                        required
                        placeholder="Enter City"
                        value={formValues.city}
                        className="form-control border-dark"
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            city: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className=" my-3">
                    <label htmlFor="home-form-phone">Enquiry</label>
                    <div className="border rounded border-dark">
                      <Select
                        styles={coursesStyle}
                        className="m-1"
                        classNamePrefix="select"
                        defaultValue={courses[0]}
                        isClearable={false}
                        options={courses}
                        onChange={(e) => setSelectedCourse(e.value)}
                      />
                    </div>
                  </div>
                  <FillUpButton
                    noTint
                    className="me-3 pe-2 text-nowrap my-2"
                    style={{ width: 160, height: 42 }}
                    text="Send Enquiry"
                  />
                </form>
              </div>

              <div className="d-flex flex-column gap-4 pt-4 align-items-end w-100 px-lg-5">
                <div
                  onClick={() => {
                    gaCTA("Courses Page - Email");
                    window.location.href = "mailto:info@taginstitute.in";
                  }}
                  className="py-1 py-md-0 d-flex justify-content-center justify-content-md-start w-100"
                >
                  <FillUpButton
                    style={{
                      width: "100%",
                    }}
                    noTint
                    text="EMAIL"
                  />
                </div>
                <div
                  onClick={() => {
                    gaCTA("Courses Page - Call Us");
                    window.location.href = "tel:7021906464";
                  }}
                  className="py-1 py-md-0 d-flex justify-content-center justify-content-md-start w-100"
                >
                  <FillUpButton
                    style={{
                      width: "100%",
                    }}
                    noTint
                    text="CALL US"
                  />
                </div>
                <div
                  onClick={() => {
                    gaCTA("Courses Page - Prospectus");
                    window.location.href = "/contact-us#prospectus";
                  }}
                  className="py-1 py-md-0 d-flex justify-content-center justify-content-md-start w-100"
                >
                  <FillUpButton
                    style={{
                      width: "100%",
                    }}
                    noTint
                    text="PROSPECTUS"
                  />
                </div>
                <div
                  onClick={() => {
                    gaCTA("Courses Page - Learn More");
                    window.location.href = "/blogs";
                  }}
                  className="py-1 py-md-0 d-flex justify-content-center justify-content-md-start w-100"
                >
                  <FillUpButton
                    style={{
                      width: "100%",
                    }}
                    noTint
                    text="LEARN MORE"
                  />
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

export default CoursesPage;
