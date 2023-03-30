import React from "react";
import { Typography } from "@mui/material";
import { avatar } from "../../images/images";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img src={avatar} alt="" className={styles.avatar} />

        <Typography
          variant="subtitle1"
          style={{ color: "#ffffff" }}
          className={styles.name}
        >
          Lorem Ipsum , dolor sit amet elit.
        </Typography>
      </div>
      <div className={styles.about}>
        <div className={styles.title}>
          <Typography variant="h6" style={{ color: "#ffffff" }}>
            About
          </Typography>
        </div>
        <Typography
          variant="subtitle1"
          style={{ color: "#ffffff" }}
          className={styles.aboutPara}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          quisquam dolor nostrum animi, sequi consequuntur.
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ color: "#ffffff", fontWeight: 700 }}
          className={styles.aboutPara}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequuntur modi voluptates dolores facere, molestiae, provident,
          libero numquam assumenda eos tempore rerum at voluptatem minima?
        </Typography>
      </div>
    </div>
  );
};
export default About;
