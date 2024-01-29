import Image from "next/image";
import logo from "../../public/assets/Logo.png";
import { BsSearch } from "react-icons/bs";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavSearch from "./NavSearch";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { HomeCoursesData } from "../../constants/homeData";
import CourseNavItem from "./CourseNavItem";
import { useDetectClickOutside } from "react-detect-click-outside";
const Navbar = ({ className, learnmore }) => {
  const [fullNav, setFullNav] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const toggleNav = () => {
    setFullNav(!fullNav);
  };
  const [showLinks, setShowLinks] = useState(false);

  const courseLinkRef = useRef("");

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const dropdownRef = useDetectClickOutside({
    onTriggered: () => setOpenDesktopDropdown(false),
  });

  const handleDesktopDropdown = () => {
    if (openDesktopDropdown === true) {
      setOpenDesktopDropdown(false);
    }
  };

  const getDropdownOptions = () => {
    return (
      <>
        {HomeCoursesData.map((item, idx) => (
          <>
            {idx == 0 ? (
              <p className="fw-bold text-muted ms-3">1 Year Diploma Courses</p>
            ) : (
              <></>
            )}
            {idx == 2 ? (
              <p className="fw-bold text-muted ms-3 mt-2">
                Short Term Advanced Courses
              </p>
            ) : (
              <></>
            )}
            <CourseNavItem
              containerClass="my-2"
              key={idx}
              title={item.title}
              subtitle={item.subtitle}
              iconImage={item.icon}
              link={item.link}
            />
          </>
        ))}
      </>
    );
  };

  useEffect(() => {
    document.body.style.overflow = fullNav ? "hidden" : "scroll";
    console.log(document.body.style.overflow);
  }, [fullNav]);

  return (
    <nav className={` ${className} bg-tint-50  w-100 `} style={{ zIndex: 1 }}>
      <AnimatePresence>
        {searchOpen && (
          <NavSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {fullNav && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ zIndex: 9999, overflowY: "scroll " }}
            className=" vh-100 vw-100  flex-grow mobile-nav d-flex flex-column align-items-center "
          >
            <div
              className="position-absolute"
              style={{ left: 20, top: 10 }}
              onClick={toggleNav}
            >
              <FiX color="white" size={34} />
            </div>
            <Link href="/">
              <a className=" d-flex align-items-center mobile-nav-logo  ">
                <Image src={logo} alt="nav_logo"  />
              </a>
            </Link>
            <div>
              <ul className="text-center fw-bold  no-bullets">
                <li className="my-3">
                  <Link href="/about">
                    <a className="mobile-nav-link focus-underline-animation text-white">
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="my-3 " onClick={toggleDropdown}>
                  <button
                    style={{ border: "none" }}
                    className="bg-transparent border-none fw-bold p-0 mobile-nav-link focus-underline-animation  text-white"
                    ref={courseLinkRef}
                  >
                    Courses
                  </button>
                </li>
                <AnimatePresence>
                  {openDropdown ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{ opacity: 1, height: 400 }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: "100vw", zIndex: 999 }}
                      className="bg-white text-start d-flex flex-column justify-content-center"
                    >
                      {HomeCoursesData.map((item, idx) => (
                        <>
                          {idx == 0 ? (
                            <p className="fw-bold text-muted ms-3">
                              1 Year Diploma Courses
                            </p>
                          ) : (
                            <></>
                          )}
                          {idx == 2 ? (
                            <p className="fw-bold text-muted ms-3 mt-2">
                              Short Term Advanced Courses
                            </p>
                          ) : (
                            <></>
                          )}
                          <CourseNavItem
                            mobile={true}
                            containerClass="my-2 "
                            key={idx}
                            title={item.title}
                            subtitle={item.subtitle}
                            iconImage={item.icon}
                            link={item.link}
                          />
                        </>
                      ))}
                    </motion.div>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
                <li className="my-3">
                  <Link href="/campus">
                    <a className=" focus-underline-animation mobile-nav-link text-white ">
                      Campus
                    </a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/faculty">
                    <a className="mobile-nav-link focus-underline-animation text-white ">
                      Faculty
                    </a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/news-events">
                    <a className="mobile-nav-link focus-underline-animation text-white ">
                      News & Events
                    </a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/life-at-tag">
                    <a className="mobile-nav-link focus-underline-animation text-white">
                      Life at TAG
                    </a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/blogs">
                    <a className="mobile-nav-link focus-underline-animation text-white ">
                      Blogs
                    </a>
                  </Link>
                </li>
                <li className="my-3">
                  <Link href="/contact-us">
                    <a className="mobile-nav-link focus-underline-animation text-white  ">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="nav-container  nav-md-bg d-flex justify-content-between align-items-center">
        {!learnmore ? (
          <div className="nav-menu-icon mx-3 c-ptr">
            <FiMenu color={"white"} onClick={toggleNav} size={30} />
          </div>
        ) : (
          <></>
        )}
        <Link href="/">
          <a className="navbar-logo d-flex align-items-center ">
            <Image src={logo} alt="" />
          </a>
        </Link>
        <div className="nav-menu-lg">
          {!learnmore ? (
            <ul className="d-flex  no-bullets">
              <li>
                <Link href="/about">
                  <a className="nav-link text-white text-nowrap hover-underline-animation mx-2 ">
                    About Us
                  </a>
                </Link>
              </li>

              <li
                ref={dropdownRef}
                onMouseLeave={() => setOpenDesktopDropdown(false)}
                className=" position-relative"
              >
                <button
                  className="nav-link text-white text-nowrap  bg-transparent  border-0 mx-2"
                  onMouseEnter={() => setOpenDesktopDropdown(true)}
                >
                  Courses
                </button>

                <AnimatePresence>
                  {openDesktopDropdown ? (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{ opacity: 1, height: 420 }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ width: 370, zIndex: 999 }}
                      className="bg-white text-start d-flex flex-column justify-content-center position-absolute rounded-3"
                    >
                      {getDropdownOptions()}
                    </motion.div>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
              </li>
              <li className="">
                <Link href="/campus">
                  <a className="nav-link nav-link-font hover-underline-animation mx-2  text-white text-nowrap ">
                    Campus
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faculty">
                  <a className="nav-link nav-link-font hover-underline-animation mx-2 text-white text-nowrap ">
                    Faculty
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/news-events">
                  <a className="nav-link nav-link-font text-white text-nowrap hover-underline-animation mx-2 ">
                    News & Events
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/life-at-tag">
                  <a className="nav-link nav-link-font text-white text-nowrap hover-underline-animation mx-2">
                    Life at TAG
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a className="nav-link nav-link-font text-white text-nowrap hover-underline-animation mx-2">
                    Blogs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a className="nav-link nav-link-font text-white text-nowrap hover-underline-animation mx-2">
                    Contact
                  </a>
                </Link>
              </li>
              <li
                className="nav-link text-white text-nowrap d-flex align-items-center justify-content-center c-ptr mx-2 "
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <BsSearch color={"white"} />
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className="nav-menu-icon mx-3 c-ptr">
          <BsSearch
            color={"white"}
            size={20}
            onClick={() => setSearchOpen(!searchOpen)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
