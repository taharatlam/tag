import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import StudioCard from '../components/StudioCard';
import Image from "next/image";
import Footer from '../components/Footer';

const ThankYouPage = () => {
    return (
  <>
    <Head>
          <title>
            Thank You - The Audio Guys (TAG) Institute | Mumbai
          </title>
         
        <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai"/>
        <meta property="og:title" content="Thank You - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta property="og:url" content="https://www.tagmumbai.com/thank-you"/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"/>
        <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta property="og:image:width" content="1500"/>
        <meta property="og:image:height" content="1155"/>
        <meta itemProp="name" content="Thank You - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta itemProp="url" content="https://www.tagmumbai.com/thank-you"/>
        <meta itemProp="description" content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"/>
        <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta name="twitter:title" content="Thank You - The Audio Guys (TAG) Institute | Mumbai"/>
        <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5dc8a41659401f78178b529e/1584624244402/Screen+Shot+2019-11-11+at+05.21.17.png?format=1500w"/>
        <meta name="twitter:url" content="https://www.tagmumbai.com/thank-you"/>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:description" content="Audio Engineering Institute. Discover about the facilities of the most advanced Institute in India"/>
        <meta name="description" content="Audio Engineering Institute. Discover about the facilities of the most 
        advanced Institute in India"/>
       </Head>
  
    <main className="home-form-wrapper">
  
        <section className="home-form-wrapper">
          <div className="bg-tint-60 blur-5  " >
            <Navbar />
            <div className="container d-flex flex-column justify-content-center text-white p-5 text-center text-md-start " style={{minHeight:600}}>
              <h2 className="home-slider-heading fw-bold py-4 text-center">Thank you for the details.</h2>
              <h4 className="pb-4 position-relative text-center">
                Our representative from the admissions team will get back to you shortly.
              </h4>
            </div>
          </div>
        </section>
       
        
        <Footer />
      </main>
    </>
    );
  };
  
  export default ThankYouPage;