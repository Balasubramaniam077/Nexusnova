import Fake_review_detection from "./Fake_Review";
import fake_review from "../../assests/image/Projects/food.jpg";
import raj from "../../assests/Users/Raj_S.png";
import traffic from "./Traffic_Rule_Classification/traffic-sign-recognition-landing.jpg";
import Traffic_Rule_Classification from "./Traffic_Rule_Classification";
import self_driving from "./Self_Driving_Car/self.jpg";
import Self_Driving_Car from "./Self_Driving_Car";
import plant_disease from "./Plant_Leaf_Disease_Classification/plant-disease.png";
import Plant_Leaf_Disease_Classification from "./Plant_Leaf_Disease_Classification";
import lisence_plat from "./Lisence_plate_Detection/lisence_plat_detection.png";
import Lisence_plate_Detection from "./Lisence_plate_Detection"
import resume_analyser from "./Resume_Analyser/resume_analyser.jpg";
import Resume_Analyser from "./Resume_Analyser";
import naveen from "../../assests/Users/Naveen.jpeg";
import jayaraj from "../../assests/Users/Jayaraj.jpeg";
import saran from "../../assests/Users/saran.jpeg";
import logu from "../../assests/Users/logu.jpeg";
import kumar from "../../assests/Users/Nk.jpg";

const cards = [
  {
    cover: fake_review,
    title: "Fake Review Detection using Machine Learning",
    text: <Fake_review_detection />,
    labels: ["React Js", "ML"],
    name: "Raj S",
    date: "24/04/2022",
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
    userAvatar: raj,
  },
  {
    cover: traffic,
    title: "Traffic Sign Classification using Deep Learning",
    text: <Traffic_Rule_Classification />,
    labels: ["React Js", "ML", "DL"],
    name: "Loganathan",
    date: "24/04/2022",
    userAvatar: logu,
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
  },
  {
    cover: plant_disease,
    title: "Plant Leaf Disease Classification using Deep Learning",
    text: <Plant_Leaf_Disease_Classification />,
    labels: ["React Js", "ML", "DL", "Flask"],
    name: "Saran K",
    date: "24/04/2022",
    userAvatar: saran,
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
  },
  {
    cover: lisence_plat,
    title: "Lisence Plate Detection using Computer Vision",
    text: <Lisence_plate_Detection />,
    labels: ["React Native", "ML", "DL", "Computer Vision"],
    name: "Naveen ",
    date: "24/04/2022",
    userAvatar: naveen,
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
  },
  {
    cover: self_driving,
    title: "Self Driving Car using Artificial Intelligence",
    text: <Self_Driving_Car />,
    labels: ["ML", "DL", "NLP", "Computer Vision"],
    name: "Kumar",
    date: "24/04/2022",
    userAvatar: kumar,
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
  },
  {
    cover: resume_analyser,
    title: "Resume Analyser for Interview ",
    text: <Resume_Analyser />,
    labels: ["React js", "Mongo DB", "TypeScript", "Node Js"],
    name: "Jayaraj K",
    date: "24/04/2022",
    userAvatar: jayaraj,
    discription:
      "In recent years, online reviews have become a vital part of the decision-making process for consumers. With the growth of e-commerce, people increasingly rely on online reviews to make informed decisions. However, not all online reviews are trustworthy. There are many fake reviews that mislead consumers and businesses alike. To tackle this problem, we have developed a machine learning-based solution to detect fake reviews",
  },
];

export default cards;
