import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";
import raj from "../../assests/Users/Raj_S.png";
import Teamwork from "../../assests/image/Teamwork.jpg";
import about_us_initial from "../../assests/gif/About+us_initial.gif";
import goal from "../../assests/gif/goal.gif";
import naveen from "../../assests/Users/Naveen.jpeg";
import jayaraj from "../../assests/Users/Jayaraj.jpeg";
import saran from "../../assests/Users/saran.jpeg";
import logu from "../../assests/Users/logu.jpeg";
import arivu from "../../assests/Users/arivu.jpeg";
import kumar from "../../assests/Users/Nk.jpg";

function About() {
  const [team, _] = useState([
    {
      name: "Raj S",
      position: ["Web Development", "Mobile Development"],
      img: raj,
    },
    {
      name: "Kumar S",
      position: ["Machine Learning", "Deep Learning"],
      img: kumar,
    },
    {
      name: "Naveen V",
      position: ["Machine Learning", "Deep Learning"],
      img: naveen,
    },
    {
      name: "Saran K",
      position: ["Web Development", "Mobile Development"],
      img: saran,
    },
    {
      name: "Arivu T",
      position: ["Web Development", "Mobile Development"],
      img: arivu,
    },
    {
      name: "Logeshwaran T",
      position: ["Web Development", "Mobile Development"],
      img: logu,
    },
    {
      name: "Jayaraj K",
      position: ["Internet of Things", "Networking"],
      img: jayaraj,
    },
  ]);

  const navigate = useNavigate();
  return (
    <div className="container">
      <p className="primary_txt fs-1 mt-2">
        <strong>The story behind the project</strong>
      </p>
      <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
        Developers are trusted to create an engaging experience for their
        companies, so we build tools to help them.
      </p>
      <p className={`secondary_txt fs-5  py-4 ${styles.justify_text}`}>
        Welcome to our website! We are a team of experienced developers who
        specialize in web development using React JS and Flask, mobile
        development using React Native, and also have expertise in Machine
        Learning and Deep Learning. Our team consists of highly skilled
        professionals who are passionate about creating high-quality, innovative
        solutions for our clients.
      </p>
      <div className="text-center">
        <img
          src={Teamwork}
          style={{
            maxInlineSize: 100 + "%",
            blockSize: "auto",
            aspectRatio: 2 / 1,
            objectFit: "cover",
            height: 400,
            width: 1000,
            objectPosition: "center",
            borderRadius: "20px",
          }}
          alt="coder"
        />
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Bringing the world's ideas to life</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className="col-md-6 d-flex flex-row justify-content-end order-md-last">
          <div className="col-lg-8 col-xl-9">
            <img
              src={about_us_initial}
              style={{ borderRadius: 20 }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-start order-md-first">
          <span>
            <p className={`fs-5 secondary_txt w-100 ${styles.justify_text}`}>
              <span className="primary_txt">
                "Bringing the world's ideas to life" {" "}
              </span>
              encompasses our fundamental mission to foster innovation, unleash
              creativity, and overcome intricate problems. It symbolizes our
              determination to bridge the gap between imagination and reality,
              and to transform the seemingly impossible into achievable
              outcomes. Through a combination of forward-thinking strategies,
              inventive methodologies, and a passion for pushing boundaries, we
              strive to unlock the full potential of ideas and turn them into
              tangible solutions that drive progress.
            </p>
            <p className={`fs-5 secondary_txt w-100 ${styles.justify_text}`}>
              With an unwavering commitment to innovation and a relentless
              pursuit of excellence, we are dedicated to shaping a future where
              groundbreaking ideas thrive and transformative solutions emerge.
              Through our mission of "Bringing the world's ideas to life," we
              aim to empower individuals and organizations to embrace their
              imaginative potential, push boundaries, and drive positive change
              on a global scale.
            </p>
          </span>
        </div>
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Goal</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className={"col-md-6 fade-left"}>
          <div className="d-flex flex-row justify-content-center col-lg-8 col-xl-9">
            <img
              src={goal}
              style={{ borderRadius: 20, transform: "scaleX(-1)" }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div
          style={{ minWidth: 300 }}
          className={
            "col-md-6 d-flex flex-row justify-content-center"
          }
        >
          <span className="w-100">
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              Our goal is to provide high-quality software development services
              to our clients and help them achieve their business objectives. We
              aim to be a reliable and trusted partner for our clients,
              delivering solutions that are innovative, efficient, and
              effective.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              Specifically, we want to help our clients leverage the power of
              modern technologies such as React.js and Flask for web development
              and React Native for mobile development. We also specialize in
              Machine Learning (ML) and Deep Learning (DL) technologies and can
              provide custom solutions in this area.
            </p>
            <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
              Overall, our goal is to provide comprehensive and high-quality
              software development services that meet our clients' needs and
              exceed their expectations. We strive to build long-lasting
              relationships with our clients, and we are committed to their
              success.
            </p>
          </span>
        </div>
      </div>
      <hr className="mt-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Our Passionate Team</strong>
      </p>
      <div className="row mt-4 d-flex justify-content-center">
        {team.map((member) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={member.name}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={member.img}
                alt={member.name}
                style={{ width: 100, cursor: "pointer" }}
                className="rounded-circle shadow-4"
              />
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="fs-4 pt-2 primary_txt">{member.name}</p>
                {member.position.map((pos, index) => (
                  <span className="fs-6 secondary_txt" key={index}>
                    {pos}
                    <br />
                  </span>
                ))}
                <p className="fs-6 mt-2 team_id">{member.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
