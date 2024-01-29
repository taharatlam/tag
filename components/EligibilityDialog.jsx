import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCheck, FiX } from "react-icons/fi";
import FillUpButton from "./FillUpButton";
import {useRouter} from "next/router";
import {motion} from 'framer-motion'

const EligibilityDialog = ({ close }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
    return () => {
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    };
  }, []);

  const [qualificationValue, setQualificationValue] = useState("inSchool");
  const [selectedLanguage, setSelectedLanguage] = useState("hindi");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedLanguage === "hindi" ||
      qualificationValue === "inSchool" ||
      qualificationValue === "tenPlusTwo"
    ) {
      setIndex(2);
    } else {
      setIndex(1);
    }
  };

  const handleError = () => {};

  const router = useRouter();

  return (
      <motion.div
          className="overlay position-fixed vw-100 vh-100 blur-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}

      >
      <button
        className="position-absolute bg-transparent border-0"
        style={{ top: 10, right: 10 }}
        onClick={() => close()}
      >
        <FiX color={"white"} size={40} />
      </button>
      {index === 0 && (
        <div className="d-flex flex-column  align-items-center">
          <h3 className="mt-5">Check Eligibility</h3>
          <form onSubmit={handleSubmit} onError={handleError}>
            <div className="d-flex flex-column align-items-center eligibility-selector">
              <label htmlFor="qualification" className="">
                Educational Qualification
              </label>
              <select
                name="qualification"
                id="qualification"
                defaultValue={qualificationValue}
                onChange={(e) => setQualificationValue(e.target.value)}
              >
                <option value="inSchool">In School</option>
                <option value="tenPlusTwo">In 10+2</option>
                <option value="schoolComplete">School Complete</option>
                <option value="college">In College</option>
                <option value="grad">Graduate</option>
                <option value="postGrad">Post Graduate</option>
              </select>
            </div>
            <div className="d-flex flex-column align-items-center eligibility-selector ">
              <label htmlFor="language" className="">
                Language preference
              </label>
              <select
                name="language"
                id="language"
                defaultValue={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="hindi">Hindi Only</option>
                <option value="english">English Only</option>
                <option value="both">Both Hindi & English</option>
                <option value="none">Doesnt Matter</option>
              </select>
            </div>
            <div className="d-flex flex-column align-items-center eligibility-selector ">
              <label htmlFor="exp" className="">
                Do you have any prior experience in music technology?
              </label>
              <select name="exp" id="exp">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="d-flex flex-column align-items-center eligibility-selector ">
              <label htmlFor="age" className="">
                Are you above the age of 18?
              </label>
              <select name="age" id="age">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="d-flex flex-column align-items-center">
              <FillUpButton style={{ width: 150 }} text="Verify" />
            </div>
          </form>
        </div>
      )}
      {index === 1 && (
        <div className="d-flex h-100 flex-column align-items-center justify-content-center">
          <h1>Congratulations!</h1>
          <p>You are eligible for this course.</p>
          <div className="my-4 eligibility-tick d-flex justify-content-center align-items-center">
            <FiCheck size={100} color="white" />
          </div>
          <FillUpButton style={{ width: 150 }} text="Contact Us" onClick={() => router.push('/contact-us')} />
        </div>
      )}
      {index === 2 && (
        <div className="d-flex h-100 flex-column align-items-center justify-content-center">
          <h1>Sorry!</h1>
          <p
            className="text-center"
            style={{ maxWidth: 800, lineHeight: "2.1em" }}
          >
            You do not meet the eligibility criteria. If you think your profile
            will be better evaluated in person Please get in touch with us at
            info@taginstitute.in
          </p>
          <div className="my-4 eligibility-tick d-flex justify-content-center align-items-center">
            <div className="text-white" style={{ fontSize: 100 }}>
              !
            </div>
          </div>
          <FillUpButton
            style={{ width: 150 }}
            text="Go Back"
            onClick={() => close()}
          />
        </div>
      )}
    </motion.div>
  );
};

export default EligibilityDialog;
