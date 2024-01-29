import Image from "next/image";
import logo from "../public/assets/Logo.png";
import mesc from "../public/assets/mescfooter.jpg";
import { EN } from "../constants/language/EN";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div className=" footer-container">
      <div className="footer-container p-3 p-md-5">
        <div className="row">
          <div className="col-sm-4 d-flex flex-column justify-content-center justify-content-md-start  align-items-center align-items-md-start">
            <div className="footer-logo ">
              <Image src={logo} alt="Picture of the author " className="" />
            </div>
            <p className=" text-center text-md-start text-white ps-md-2 footer-address ">
              {EN.FOOTER_ADDRESS}
            </p>
          </div>
          <div className="col-sm-8 text-white ">
            <div className="row">
              <div className="col-sm-4 mb-4 mb-md-0">
                <p className="text-center text-md-start fw-bold">Learn More</p>
                <ul className="text-center text-white text-md-start no-bullets ">
                  <li>
                    <Link href="/campus">
                      <a className="text-decoration-none text-white">Campus</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faculty">
                      <a className="text-decoration-none text-white">Faculty</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a className="text-decoration-none text-white">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className="text-decoration-none text-white">
                        About Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 mb-4 mb-md-0">
                <p className="text-center text-md-start fw-bold">
                  Useful Links
                </p>
                <ul className="text-center text-white text-md-start no-bullets ">
                  <li>
                    <Link href="/blogs">
                      <a className="text-decoration-none text-white">Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news-events">
                      <a className="text-decoration-none text-white">
                        News and Events
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us#prospectus">
                      <a className="text-decoration-none text-white">
                        Request Prospectus
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 mb-4 mb-md-0">
                <p className="text-center text-md-start fw-bold ">Courses</p>
                <ul className="text-center text-white text-md-start no-bullets ">
                  <li>
                    <Link href="/mumbai/sound-engineering-course">
                      <a className="text-decoration-none text-white">DSE</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/mumbai/music-production-course">
                      <a className="text-decoration-none text-white">DMP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/caap">
                      <a className="text-decoration-none text-white">CAAP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/acmp">
                      <a className="text-decoration-none text-white">CAMP</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses/live-sound-reinforcement">
                      <a className="text-decoration-none text-white">CLS</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center py-2">
            <Image
              src={mesc}
              alt="Picture of the author "
              width={200}
              height={300}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center pt-3">
            <BsFacebook
              onClick={() =>
                router.push("https://www.facebook.com/theaudioguys")
              }
              title="Facebook"
              className="mx-3 c-ptr"
              size={32}
              color={"white"}
            />
            <BsInstagram
              onClick={() =>
                router.push("https://www.instagram.com/taginstitute")
              }
              title="Instagram"
              className="mx-3 c-ptr"
              size={32}
              color={"white"}
            />
            <BsYoutube
              onClick={() =>
                router.push("https://www.youtube.com/theaudioguys")
              }
              title="Youtube"
              className="mx-3 c-ptr "
              size={32}
              color={"white"}
            />
            <BsTwitter
              onClick={() => router.push("https://twitter.com/TAG_Mumbai")}
              title="Twitter"
              className="mx-3 c-ptr "
              size={32}
              color={"white"}
            />
          </div>
          <p className="mt-3 text-white text-center">
            Copyright © TNS Audio Guys Private Limited. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
