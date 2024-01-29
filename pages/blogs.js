import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BlogThumb from "../components/BlogThumb";
import { getAllBlogs } from "../services/blog-events.service";
import {Audio} from "react-loader-spinner";
import Colors from "../constants/colors";
import PromoBanner from "../components/PromoBanner";
import Head from "next/head";

const BlogsPage = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(20);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await getAllBlogs(page, count);
        setData(res.data.data);
        setTotalPages(res.data?.meta?.pagesCount);
      } catch (e) {
        console.log(e);
        alert("error occured");
      }
    })();
    setLoading(false);
  }, [page, count]);

  return (
  <>
    <Head>
      <title>
        FREE Study Blog - The Audio Guys (TAG) Institute | Mumbai
      </title>

      <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai"/>
      <meta property="og:title" content="FREE Study Blog - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta property="og:url" content="https://www.tagmumbai.com/free-study"/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="We believe that self learning is a very powerful tool. Hence for a better generation of Music Producers and Audio Engineers TAG Institute regularly posts blogs to share information amongst the sound engineering and music production community."/>
      <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e7764467531ce4dfe410d23/1584882790188/Adjustments.jpg?format=1500w"/>
      <meta property="og:image:width" content="1057"/>
      <meta property="og:image:height" content="704"/>
      <meta itemProp="name" content="FREE Study Blog - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta itemProp="url" content="https://www.tagmumbai.com/free-study"/>
      <meta itemProp="description" content="We believe that self learning is a very powerful tool. Hence for a better generation of Music Producers and Audio Engineers TAG Institute regularly posts blogs to share information amongst the sound engineering and music production community."/>
      <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e7764467531ce4dfe410d23/1584882790188/Adjustments.jpg?format=1500w"/>
      <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e7764467531ce4dfe410d23/1584882790188/Adjustments.jpg?format=1500w"/>
      <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e7764467531ce4dfe410d23/1584882790188/Adjustments.jpg?format=1500w"/>
      <meta name="twitter:title" content="FREE Study Blog - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e7764467531ce4dfe410d23/1584882790188/Adjustments.jpg?format=1500w"/>
      <meta name="twitter:url" content="https://www.tagmumbai.com/free-study"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:description" content="We believe that self learning is a very powerful tool. Hence for a better generation of Music Producers and Audio Engineers TAG Institute regularly posts blogs to share information amongst the sound engineering and music production community."/>
      <meta name="description" content="We believe that self learning is a very powerful tool. Hence for a better 
      generation of Music Producers and Audio Engineers TAG Institute regularly 
      posts blogs to share information amongst the sound engineering and music 
      production community."/>
  </Head>

    <main>
      <section className="news-events-hero">
        <div style={{ background: "rgba(0,0,0,0.5)" }}>
          <Navbar />
          <div
            className="container text-center text-white d-flex flex-column justify-content-center align-content-center "
            style={{ height: "65vh" }}
          >
            <h1 className="home-slider-heading fw-bold">Learning Base.</h1>
            <p>We teach you for a better tomorrow</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        {loading && <Audio color={Colors.primaryColor} height={80} width={80} /> }
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-sm-4" key={index}>
                <BlogThumb key={index} data={item} type="blogs" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            {totalPages > page && (
             <div className="d-flex justify-content-center my-3" >
               <button className="theme-button" onClick={() => setPage(page + 1)}>Load More</button>
             </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </>);
};

export default BlogsPage;
