import React from "react";
import { useEffect, useState } from "react";
import AlumniCarousel from "../components/AlumniCarousel/AlumniCarousel";
import AlumniCarouselMobileItem from "../components/AlumniCarousel/AlumniCarouselMobileItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import axios from "axios";

const YTShortsCarousel = () => {
  const [youtubeshorts, setYoutubeshorts] = useState([]);
  useEffect(() => {
    getYoutubeData();
  }, []);

  async function getYoutubeData() {
    const playlistId = "PLzPF0KoaO7yQ2sb66xV8JFM-SwkgZWwLX";
    const YOUTUBE_DATA =
      "https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=PLzPF0KoaO7yQ2sb66xV8JFM-SwkgZWwLX&key=AIzaSyDq3qzWOBPPMtUEsTqanIaakfU-uM0CRvs&maxResults=50";

    try {
      const result = await axios.get(YOUTUBE_DATA);

      setYoutubeshorts(
        result?.data?.items
          .filter((video) => video.snippet.title !== "Private video")
          .map((video) => ({
            //   name: video?.snippet?.title,
            //   message: video?.snippet?.title,
            videoId: video?.contentDetails?.videoId,
            image: video?.snippet?.thumbnails?.maxres?.url,
          }))
      );
    } catch (e) {
      console.log("Error occurred while fetching Youtube Data:", e);
    }
  }

  return (
    <div className="mt-4">
      <Carousel
        showStatus={false}
        showIndicators={false}
        className="alumni-mobile-carousel"
        verticalSwipe="natural"
        swipeScrollTolerance={100}
        preventMovementUntilSwipeScrollTolerance
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
      >
        {youtubeshorts && youtubeshorts.length > 0 ? (
          youtubeshorts.map((item, idx) => (
            <AlumniCarouselMobileItem key={idx} item={item} type="shorts" />
          ))
        ) : (
          <>
            <p className="text-white">
              See our latest <span className="text-theme">Instagram</span> posts
              below<span className="text-theme">.</span>
            </p>
          </>
        )}
      </Carousel>
      {youtubeshorts && youtubeshorts.length > 0 ? (
        <AlumniCarousel
          data={youtubeshorts?.map((data, i) => ({
            order: i + 1,
            // name: data?.name,
            // message: data?.message,
            img: data?.image,
            videoId: data?.videoId,
          }))}
          type="youtubeshorts"
        />
      ) : (
        <>
          <p className="text-white">
            See our latest <span className="text-theme">Instagram</span> posts
            below<span className="text-theme">.</span>
          </p>
        </>
      )}
    </div>
  );
};

export default YTShortsCarousel;
