import { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavSearch({ searchOpen, setSearchOpen }) {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const allSearchResults = ["Campus", "Courses", "Faculty", "About", "Contact"];
  const router = useRouter();
  useEffect(() => {
    if (searchText.length === 0) {
      setSearchResults([]);
    }

    if (searchText.length > 0) {
      setSearchResults(
        allSearchResults.filter((x) =>
          x.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <motion.div
      initial={{
        position: "absolute",
        top: 0,
        right: 0,
        borderBottomLeftRadius: "100%",
      }}
      animate={{ height: "1000px", width: "100vw", borderRadius: 0 }}
      transition={{ duration: 0.3 }}
      exit={{
        position: "absolute",
        top: 0,
        right: 0,
        height: 0,
        width: 0,
        borderBottomLeftRadius: "100%",
      }}
      className="position-fixed bg-tint-90  d-flex justify-content-center"
      style={{ zIndex: 999, paddingTop: "20vh" }}
    >
      <div
        className="position-absolute c-ptr"
        style={{ right: 20, top: 10 }}
        onClick={() => setSearchOpen(!searchOpen)}
      >
        <FiX color="white" size={34} />
      </div>

      <div>
        <h2 className="text-white pb-3">Search</h2>

        <motion.div
          initial={{
            x: "-100vw",
          }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          exit={{
            x: "-100vw",
          }}
          className="search-input-container d-flex align-items-center ps-3"
        >
          <FiSearch color="white" />
          <input
            placeholder="Enter search term"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="search-input "
          />
        </motion.div>

        <div className="mt-3">
          {searchResults.map((searchResult, idx) => (
            <div className="" key={idx}>
              <p
                onClick={() => router.push(`/${searchResult.toLowerCase()}`)}
                className="text-white c-ptr py-1 nav-search-items  d-inline-block"
              >
                {searchResult}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
