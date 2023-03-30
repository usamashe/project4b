import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from "./AniImage.module.css";
import {
  IntroBrain,
  IntroFeatured,
  IntroFrontLayer,
} from "../../images/images";
import { Typography } from "@mui/material";

const AniImage = () => {
  const { ref: brainRef } = useWebAnimations({
    id: "brain",
    keyframes: { transform: ["translateY(20px)", "translateY(-20px)"] },
    animationOptions: {
      duration: 1000,
      iterations: 40,
      direction: "alternate",
      easing: "ease-in-out",
    },
  });
  const { ref: layerRef } = useWebAnimations({
    id: "layer",
    keyframes: { opacity: [0, 1, 1] },
    animationOptions: {
      duration: 1000,
      iterations: 40,
      direction: "alternate",
      easing: "steps(3,end)",
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Typography
          variant="h1"
          style={{ color: "#ffffff" }}
          className={styles.heading1}
        >
          Cortex
        </Typography>
        <Typography
          variant="h2"
          style={{ color: "#ffffff" }}
          className={styles.heading2}
        >
          CopyWriter
        </Typography>
        <Typography
          variant="h5"
          style={{ color: "#ffffff" }}
          className={styles.heading3}
        >
          {" "}
          Enhance your communications with psychology-based copywriting and UX
          writing
        </Typography>
        <button className={styles.chatBtn}>
          <Typography variant="subtitle1" style={{ color: "#ffffff" }}>
            {" "}
            Send a message
          </Typography>
        </button>
      </div>
      <div className={styles.rightContainer}>
        <img src={IntroFeatured} alt="" className={styles.featuredImage} />
        <img
          src={IntroFrontLayer}
          alt=""
          className={styles.frontLayer}
          ref={layerRef}
        />
        <img
          src={IntroBrain}
          alt=""
          className={styles.introBrain}
          ref={brainRef}
        />
      </div>
    </div>
  );
};

export default AniImage;
