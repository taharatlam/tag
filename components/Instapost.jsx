import dayjs from "dayjs";
// import moment from "moment/moment";
import Image from "next/image";
// import { IoIosTimer } from "react-icons/io";
import RedirectButton from "./RedirectButton";

const Instapost = ({ thumbnail, username, createdAt, caption, url }) => {
  return (
    <div
      className="border rounded overflow-hidden p-2 shadow-lg m-2"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <div
        className="d-flex gap-2 align-items-center justify-content-between pe-2 "
        style={{
          width: "100%",
        }}
      >
        <div className="d-flex gap-2 align-items-center">
          <Image
            alt="profile_pic"
            src={
              "https://res.cloudinary.com/tag-institute/image/upload/v1705089765/logo_dpafns.jpg"
            }
            className="border p-1"
            style={{
              borderRadius: "50px",
            }}
            height="40px"
            width="40px"
          />
          <div className="fs-6 fw-bold">{username}</div>
        </div>
        <Image
          alt="insta"
          src={
            "https://res.cloudinary.com/tag-institute/image/upload/v1705091441/insta_yxh0cq.png"
          }
          height="20px"
          width="20px"
          className="cursor-pointer"
          onClick={() => window.open(url, "_blank")}
        />
      </div>
      <div className="lh-sm fs-6 text-start my-2 mb-3">{`${caption?.slice(
        0,
        60
      )}...`}</div>
      <div className="post-container">
        <div className="container-button">
          <RedirectButton
            url={url}
            text={"View Post"}
            style={{ width: "125px" }}
          />
        </div>
        <div className="post">
          {thumbnail.includes(".mp4") ? (
            <video
              autoPlay
              src={thumbnail}
              type="video/mp4"
              className="rounded"
              height="100%"
              width="100%"
              muted
              loop
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="yt-video"
              src={thumbnail}
              className="rounded"
              height="100%"
              width="100%"
            />
          )}
        </div>
      </div>

      {/* <div
        style={{ fontSize: "12px" }}
        className="lh-sm text-start my-2 d-flex align-items-center gap-1"
      >
        <IoIosTimer />
        {moment(createdAt).fromNow()}
      </div> */}
    </div>
  );
};
export default Instapost;
