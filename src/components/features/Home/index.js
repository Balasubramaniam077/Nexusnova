import coder_gif from "../../assests/gif/Coder_gif.gif";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./home.module.css";
import programing from "../../assests/image/Programing.jpg";
import {
  java,
  javascript,
  python,
  flask,
  mongodb,
  firebase,
  html,
  css,
  react,
} from "../../assests/image/programing_language";
import Expense from "../../assests/image/Projects/Expense.webp";
import Emotion from "../../assests/image/Projects/emotion.jpeg";
import mask from "../../assests/image/Projects/mask1.png";
import chatbot from "../../assests/image/Projects/chat1.jpeg";
import gymx from "../../assests/image/Projects/workout.jpg";
import xcar from "../../assests/image/Projects/food.jpg";
import ProjectCard from "./ProjectCard";

function Home() {
  const navigate = useNavigate();

  const skills = [
    { name: "Java", image: java },
    { name: "JavaScript", image: javascript },
    { name: "Python", image: python },
    { name: "Flask", image: flask },
    { name: "Mongodb", image: mongodb },
    { name: "Firebase", image: firebase },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "React", image: react },
  ];

  const projectDetails = [
    {
      title: "Expense Tracker Mobile",
      coverImg: Expense,
      description:
        "Personal finance encompasses the financial choices and actions individuals make to manage their money effectively. A finance app simplifies this process by providing budgeting, accounting, and insightful money management features. Using a mobile application built with React Native and Firebase as the database enhances accessibility and convenience.",
      technologies: ["React Native", "Firebase"],
    },
    {
      title: "Emotion Tracking",
      coverImg: Emotion,
      description:
        "Emotion tracking is a process of monitoring and measuring the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people.",
      technologies: ["python", "flask", "mongodb", "reactjs"],
    },
    {
      title: "Mask Object Detection",
      coverImg: mask,
      description:
        "Mask object detection is a process of monitoring and measuring the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people",
      technologies: ["python", "flask", "machine learning", "deep learning"],
    },
    {
      title: "AI Chatbot",
      coverImg: chatbot,
      description:
        "AI Chatbot is a process of monitoring and measuring the emotions of a person or a group of people. It is a way to quantify and understand the emotions of a person or a group of people",
      technologies: ["python", "flask", "machine learning", "deep learning"],
    },
    {
      title: "GYM Workout Tracker",
      coverImg: gymx,
      description:
        "GYM Workout Tracker is a process of monitoring and measuring the emotions of a person on the workout position. It is a way to quantify the correctnss of the workout position to make sure to boost up your strength.",
      technologies: ["python", "Mediapipe", "machine learning"],
    },
    {
      title: "Calorie Idendifier",
      coverImg: xcar,
      description:
        "Calorie Identifier is used to idendify the calories of the food item. It is a way to balance the diet of the person to make sure to boost up your strength with a periodic diet.",
      technologies: ["python", "Mediapipe", "machine learning"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectPerPage] = useState(9);

  // Logic for displaying current Project
  const indexOfLastProject = currentPage * ProjectPerPage;
  const indexOfFirstProject = indexOfLastProject - ProjectPerPage;
  const currentProjects = projectDetails.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projectDetails.length / ProjectPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <p className="primary_txt fs-1 mt-2">
        <strong>We are the Group of Engineers</strong>
      </p>
      <p className={`secondary_txt fs-5 pt-4 ${styles.justify_text}`}>
        To given a dynamic and Optimized Solution to the various problems in the
        real world
      </p>
      <p className={`secondary_txt fs-5 py-4 ${styles.justify_text}`}>
        We specialize in web development using React JS and Flask, mobile
        development using React Native, and have expertise in Machine Learning
        and Deep Learning. Our focus is on delivering robust and scalable
        applications that integrate intelligent solutions, enabling data-driven
        decisions and valuable insights. Our team consists of highly skilled
        professionals who create innovative and high-quality solutions,
        exceeding client expectations.
      </p>
      <div className="text-center">
        <img
          src={programing}
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
      <hr className="my-4 " />
      <p className="primary_txt fs-1 mt-4">
        <strong>Freelancing</strong>
      </p>
      <div className="row d-flex flex-row align-items-center">
        <div className="col-md-6 d-flex flex-row justify-content-end order-md-last">
          <div className="col-lg-8 col-xl-9">
            <img
              src={coder_gif}
              style={{ borderRadius: 20 }}
              alt="coder"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-start order-md-first">
          <p className={`fs-5 secondary_txt w-100 ${styles.justify_text}`}>
            Freelancers working in the field of AI can perform tasks such as
            developing and training machine learning models, creating natural
            language processing systems, and working on computer vision
            projects. In web development, freelancers can work on building
            websites, web applications, e-commerce platforms, and more, using
            technologies such as React, Angular, and Vue. Those working in the
            field of IoT can develop and program devices and sensors for a range
            of applications, including smart homes, wearables, and industrial
            automation. Finally, those working in research can conduct studies
            and analyze data to provide insights and solutions in fields such as
            medicine, social sciences, and engineering. These are all examples
            of the types of projects that freelancers can undertake in these
            exciting and rapidly growing fields.
          </p>
        </div>
      </div>

      <hr className="mt-4 " />

      <p className="primary_txt fs-1 mt-4">
        <strong>Projects</strong>
      </p>
      <div className="w-100">
        <div className="row row-cols-1 row-cols-lg-3 g-4">
          {currentProjects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(number)}
                  style={{
                    backgroundColor:
                      currentPage === number ? "#5d5dff" : "white",
                    color: currentPage === number ? "white" : "black",
                  }}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <hr className="mt-4" />
      <p className="headline fs-1">
        <strong>We work in</strong>
      </p>
      <div className={`${styles.skill_container}`}>
        <div className={`${styles.scroll_wrapper}`}>
          {skills.concat(skills).map((skill, index) => (
            <div key={index}>
              <div className={`${styles.skill_box}`}>
                <img src={skill.image} alt={skill.name} />
                <div className={`${styles.tooltip}`}>
                  <span>{skill.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-4 " />
      <p className="primary_txt fs-1 my-4 ">
        <strong>Get in Touch</strong>
      </p>
      <p className={`secondary_txt fs-5 ${styles.justify_text}`}>
        Don't wait any longer to start turning your ideas into reality. Our team
        of experts is ready to provide you with top-notch web and mobile
        development services, as well as ML and DL solutions and conference
        paper writing. Contact us today to see how we can help bring your
        projects to life.
      </p>
      <div className="d-flex justify-content-center ">
        <div className="col-12 col-md-7 col-lg-6 col-xlg-3">
          <div
            className={`mt-4 about d-flex justify-content-center ${styles.contact_btn_border}`}
          >
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className={`${styles.contact_btn}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
