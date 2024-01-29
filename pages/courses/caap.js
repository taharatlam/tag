import React from "react";
import Courses from "../../components/courses";
import { CoursesData } from "../../constants/CoursesData";
import Head from "next/head";

const CourseACPP = () => {
  return (
    <>
      <Head>
        <title>
          Advanced Certificate in Post Production - The Audio Guys (TAG) Institute | Mumbai
        </title>

        <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai" />
        <meta property="og:title" content="Advanced Certificate in Post Production - The Audio Guys (TAG) Institute | Mumbai" />
        <meta property="og:url" content="https://www.tagmumbai.com/mumbai/audio-post-production-game-audio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="The advance certificate in Music Production is for those who are interested in perfecting their skills of  music production, synthesis and recording. Hands on learning with 1 on 1 student support tutors are also available for this course." />
        <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dd998458f514102b4404ec2/1573437502732/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="1155" />
        <meta itemProp="name" content="Advanced Certificate in Post Production - The Audio Guys (TAG) Institute | Mumbai" />
        <meta itemProp="url" content="https://www.tagmumbai.com/mumbai/audio-post-production-game-audio" />
        <meta itemProp="description" content="The advance certificate in Music Production is for those who are interested in perfecting their skills of  music production, synthesis and recording. Hands on learning with 1 on 1 student support tutors are also available for this course." />
        <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dd998458f514102b4404ec2/1573437502732/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
        <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dd998458f514102b4404ec2/1573437502732/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
        <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dd998458f514102b4404ec2/1573437502732/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
        <meta name="twitter:title" content="Advanced Certificate in Post Production - The Audio Guys (TAG) Institute | Mumbai" />
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dd998458f514102b4404ec2/1573437502732/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
        <meta name="twitter:url" content="https://www.tagmumbai.com/mumbai/audio-post-production-game-audio" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="The advance certificate in Music Production is for those who are interested in perfecting their skills of  music production, synthesis and recording. Hands on learning with 1 on 1 student support tutors are also available for this course." />
        <meta name="description" content="The advance certificate in Music Production is for those who are interested 
        in perfecting their skills of music production, synthesis and recording. 
        Hands on learning with 1 on 1 student support tutors are also available for 
        this course."/>
      </Head>

      <div>
        <Courses data={CoursesData.caap} background="acpp" />
      </div>
    </>
  );
};

export default CourseACPP;
