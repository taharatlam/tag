import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import BlogThumb from "../components/BlogThumb";
import { getAllBlogs, getAllEvents } from "../services/blog-events.service";
import {Audio} from "react-loader-spinner";
import Colors from "../constants/colors";
import Head from "next/head";

const NewsEvents = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(9);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await getAllEvents(page, count);
        setData([...data, ...res.data.data]);
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
        News and Events - The Audio Guys (TAG) Institute | Mumbai
      </title>
        
      <meta property="og:site_name" content="The Audio Guys (TAG) Institute | Mumbai"/>
      <meta property="og:title" content="News and Events - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta property="og:url" content="https://www.tagmumbai.com/news-and-events"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"/>
      <meta property="og:image:width" content="500"/>
      <meta property="og:image:height" content="184"/>
      <meta itemProp="name" content="News and Events - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta itemProp="url" content="https://www.tagmumbai.com/news-and-events"/>
      <meta itemProp="thumbnailUrl" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"/>
      <link rel="image_src" href="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"/>
      <meta itemProp="image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"/>
      <meta name="twitter:title" content="News and Events - The Audio Guys (TAG) Institute | Mumbai"/>
      <meta name="twitter:image" content="http://static1.squarespace.com/static/5d3f4239a8e0960001a93eb7/t/5e945c9abfaecc6753944f58/1586781341171/logo%2Bonly.png?format=1500w"/>
      <meta name="twitter:url" content="https://www.tagmumbai.com/news-and-events"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="description" content=""/>
  </Head>

    <main>
      <section className="bg-black">
        <div style={{ background: "rgba(0,0,0,0.5)" }}>
          <Navbar />
          <div
            className="container text-center text-white d-flex flex-column justify-content-center align-content-center "
            style={{ height: "65vh" }}
          >
            <h1 className="home-slider-heading fw-bold">News and Events.</h1>
            <p>
              Stay up to date with all our activities <br />
              that happen in and around the campus.
            </p>
          </div>
        </div>
      </section>
      <section className="py-5">
        {loading && <Audio color={Colors.primaryColor} height={80} width={80} /> }
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-sm-4">
                <BlogThumb key={index} data={item} type="news-events" />
              </div>
            ))}
          </div>
        </div>
        <div>
          {totalPages > page && (
              <div className="d-flex justify-content-center my-3" >
                <button className="theme-button" onClick={() => setPage(page + 1)}>Load More</button>
              </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
    </>
  );
};

export default NewsEvents;
