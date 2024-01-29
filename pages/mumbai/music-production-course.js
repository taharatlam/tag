import React from "react";
import Courses from "../../components/courses";
import { CoursesData } from "../../constants/CoursesData";
import Head from "next/head";

const CourseDMP = () => {
  return (
    <>
      <Head>
          <title>
            Diploma In Sound Engineering - The Audio Guys (TAG) Institute | Mumbai
          </title>

        <meta property="og:site_name" content="Diploma In Music Production - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta property="og:title" content="Diploma In Music Production - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta property="og:url" content="https://www.tagmumbai.com/mumbai/music-production-course"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."/>
        <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="1155"/>
        <meta itemProp="name" content="Diploma In Music Production - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta itemProp="url" content="https://www.tagmumbai.com/mumbai/music-production-course"/>
        <meta itemProp="description" content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."/>
        <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta name="twitter:title" content="Diploma In Music Production - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8c036492ddd0f8ba1577e/1573437790479/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta name="twitter:url" content="https://www.tagmumbai.com/mumbai/music-production-course"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content="Music Production Course India. 1-year Diploma. Study Sound Engineering and music production diploma courses from the best faculty and campus in india. Hands on learning Professional artists and music producers like meghdeep bose, Amaal Mallik team, Clinton Cerejo team."/>
        <meta name="description" content="Music Production Course India. 1-year Diploma. Study Sound Engineering and 
        music production diploma courses from the best faculty and campus in india. 
        Hands on learning Professional artists and music producers like meghdeep 
        bose, Amaal Mallik team, Clinton Cerejo team."/>
      </Head>

    <div>
      <Courses data={CoursesData.dmp} background="dmp" />
    </div>
    </>
  );
};

export default CourseDMP;
