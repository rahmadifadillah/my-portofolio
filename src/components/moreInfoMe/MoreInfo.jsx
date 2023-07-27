import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoNavigateCircleOutline, IoChevronBackOutline } from "react-icons/io5";

import picture from "../../assets/img/profileImage.png";

import "./moreInfo.css";
import { Link } from "react-router-dom";

const MoreInfo = () => {
  const { scrollYProgress } = useScroll();
  const first = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const second = useTransform(scrollYProgress, [0, 1], [0, 400]);
  return (
    <section className="info">
      <div className="back__button">
        <Link to="/">
          <IoChevronBackOutline />
        </Link>
      </div>
      <div className="info__container">
        <div className="info__me">
          <div className="info__more">
            <img className="info__picture" src={picture} alt="" />
            <span>
              I am a software engineer using a JavaScript tech stack, namely
              MERN stack (MongoDB, Express JS, React JS, and Node JS). I also
              have an interest in user interface and user experience, have some
              experience in web development.
            </span>
          </div>
          <a href="#info__contact">
            Feel free to contact me <i class="uil uil-arrow-up-right"></i>
          </a>
          <div className="info__sosmed">
            <span>Also available on</span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/6287883435441/?text=Hello%20Rahmadi"
            >
              WhatsApp <IoNavigateCircleOutline />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://instagram.com/rahmadi.fadillah"
            >
              Instagram <IoNavigateCircleOutline />
            </a>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/rahmadi-fadillah-a73222222/"
            >
              LinkedIn <IoNavigateCircleOutline />
            </a>
          </div>
        </div>
        <div className="info__achieve">
          <div className="info__item">
            <h1>Certificate</h1>
            <div className="info__detail">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://badgr.com/public/assertions/xeJWf-EsTgKPtRlxnEdazg?identity__email=rahmadifadillah83@gmail.com"
              >
                Danone - Product Inovation{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://badgr.com/public/assertions/J_LIQCmOSuK37DhNezp-lQ?identity__email=rahmadifadillah83@gmail.com"
              >
                Junior Web Development <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1pTGC1d-TiLeC_ks8gdWteiWiFMbSb87q/view?usp=drivesdk"
              >
                Top 8 Front-End & Back-End Web Development{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://drive.google.com/file/d/1kTPnOWIB5MxAq7dEBTe_rlhXMkCdiAKQ/view"
              >
                Magang Studi Independen Bersertifikat Batch 4{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
          <div className="info__item">
            <h1>Experience</h1>
            <div className="info__detail">
              <a target="_blank" rel="noreferrer noopener" href="">
                Intern - Front-End Developer - PT.Impactbyte Teknologi Edukasi{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="">
                Fulltime - Staff - Sahabat Utama Group{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="">
                Intern - Staff - Kementrian Desa{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
              <a target="_blank" rel="noreferrer noopener" href="">
                Intern - Staff - Walikota Jakarta Selatan{" "}
                <i class="uil uil-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info__typography">
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: first }}
            className="info__typo"
          >
            contact <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> - contact{" "}
            <span className="typo__outline">me</span> -
          </motion.h1>
        </div>
        <div class="typo__filled">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{ x: 0, transition: { duration: 0.8 } }}
            style={{ x: second }}
            className="info__typo"
          >
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -{" "}
            <span className="typo__outline"> contact</span> me -
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
