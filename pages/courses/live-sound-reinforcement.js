import React from "react";
import Courses from "../../components/courses";
import { CoursesData } from "../../constants/CoursesData";
import Head from "next/head";

const CourseDSE = () => {
    return (
        <>
            <Head>
                <title>
                    Certificate in Live Sound - The Audio Guys (TAG) Institute | Mumbai
                </title>

                <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai" />
                <meta property="og:title" content="Diploma In Sound Engineering - The Audio Guys (TAG) Institute | Mumbai" />
                <meta property="og:url" content="https://www.tagmumbai.com/mumbai/sound-engineering-course" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Study Sound Engineering Diploma. 1 Year diploma in india. 100 percent placement assistance.  Faculty included national award, iifa winners. Study Sound Engineering and music production diploma courses from the best faculty and campus in india." />
                <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a31280e6ab4d112d39d3/1573430039855/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
                <meta property="og:image:width" content="1500" />
                <meta property="og:image:height" content="1155" />
                <meta itemProp="name" content="Diploma In Sound Engineering - The Audio Guys (TAG) Institute | Mumbai" />
                <meta itemProp="url" content="https://www.tagmumbai.com/mumbai/sound-engineering-course" />
                <meta itemProp="description" content="Study Sound Engineering Diploma. 1 Year diploma in india. 100 percent placement assistance.  Faculty included national award, iifa winners. Study Sound Engineering and music production diploma courses from the best faculty and campus in india." />
                <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a31280e6ab4d112d39d3/1573430039855/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
                <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a31280e6ab4d112d39d3/1573430039855/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
                <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a31280e6ab4d112d39d3/1573430039855/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
                <meta name="twitter:title" content="Diploma In Sound Engineering - The Audio Guys (TAG) Institute | Mumbai" />
                <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a31280e6ab4d112d39d3/1573430039855/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w" />
                <meta name="twitter:url" content="https://www.tagmumbai.com/mumbai/sound-engineering-course" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content="Study Sound Engineering Diploma. 1 Year diploma in india. 100 percent placement assistance.  Faculty included national award, iifa winners. Study Sound Engineering and music production diploma courses from the best faculty and campus in india." />
                <meta name="description" content="Study Sound Engineering Diploma. 1 Year diploma in india. 100 percent
      placement assistance. Faculty included national award, iifa winners. Study
      Sound Engineering and music production diploma courses from the best
      faculty and campus in india."/>
            </Head>

            <div>
                <Courses data={CoursesData.csr} background="live-sound-reinforcement" />
            </div>
        </>
    );
};

export default CourseDSE;
