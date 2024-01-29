import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import {
  getCommentsOnEvent,
  getSpecificEvents,
  postCommentOnEvent,
} from "../../services/blog-events.service";
import dayjs from "dayjs";
import CommentItem from "../../components/CommentItem";
import Loader from "../../components/Loader";
import {FaArrowLeft} from "react-icons/fa";
import { gaCTA } from '../../utils/analytics';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [commentList, setCommentList] = useState([]);
  const [commentInput, setCommentInput] = useState({
    name: "",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await getSpecificEvents(id);
        console.log(res.data.data);
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const res = await getCommentsOnEvent(id, page, count);
        setCommentList(res?.data?.data);
      } catch (e) {
        console.log(e);
        alert("error while fetching comments");
      }
    })();
    setLoading(false);
  }, [page, count, update,id]);

  const handleCommentPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await postCommentOnEvent(id, commentInput);
      setUpdate(!update);
      setLoading(false);

      gaCTA('News and Events - Comment Added')
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <main>

      {loading && <Loader/>}
      <section className="bg-dark">
        <div style={{ background: "rgba(0,0,0,0.5)" }}>
          <Navbar />
        </div>

      </section>

      <section>
        <div className="container my-3 blog-main-container">
          <div className="my-3" >
            <button className="theme-icon-btn d-flex align-items-center " onClick={() => router.back()} ><FaArrowLeft/>&nbsp;&nbsp;BACK TO NEWS AND EVENTS</button>
          </div>
          <h1 className=" text-center text-theme" >{data.title}</h1>
          <p className="text-muted text-center" >{dayjs(data?.created_at).format("MMMM D, YYYY")}</p>
          <div
            className=" my-3"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="container">
          <h4>Comments</h4>
          <form
            onSubmit={handleCommentPost}
            className="d-flex flex-column gap-3 my-3"
          >
            <input
                placeholder="Your Name Here..."
                className="form-control" required type="text"
              onChange={(e) =>
                setCommentInput({ ...commentInput, name: e.target.value })
              }
            />
            <textarea
                placeholder="Your Comment Here..."
                className="form-control" required
              onChange={(e) =>
                setCommentInput({ ...commentInput, content: e.target.value })
              }
            />
            <div>
              <button type="submit" className="theme-button" >POST COMMENT</button>
            </div>
          </form>
          {commentList.map((item, idx) => (
            <CommentItem data={item} key={idx} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogPage;
