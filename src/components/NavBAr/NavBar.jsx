import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import styles from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const { ref: refQ } = useWebAnimations({
    id: "charQ",
    keyframes: {
      color: [
        "#A800ff",
        "#0079FF",
        "#00F11D",
        "#FFEF00",
        "#FF7F00",
        "#FF0900",
        "#A800ff",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });
  const { ref: refW } = useWebAnimations({
    id: "charW",
    keyframes: {
      color: [
        "#0079FF",
        "#00F11D",
        "#FFEF00",
        "#FF7F00",
        "#FF0900",
        "#A800ff",
        "#0079FF",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });
  const { ref: refE } = useWebAnimations({
    id: "charE",
    keyframes: {
      color: [
        "#00F11D",
        "#FFEF00",
        "#FF7F00",
        "#FF0900",
        "#A800ff",
        "#0079FF",
        "#00F11D",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });
  const { ref: refR } = useWebAnimations({
    id: "charR",
    keyframes: {
      color: [
        "#FFEF00",
        "#FF7F00",
        "#FF0900",
        "#A800ff",
        "#0079FF",
        "#00F11D",
        "#FFEF00",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });

  const { ref: refT } = useWebAnimations({
    id: "charT",
    keyframes: {
      color: [
        "#FF7F00",
        "#FF0900",
        "#A800ff",
        "#0079FF",
        "#00F11D",
        "#FFEF00",
        "#FF7F00",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });
  const { ref: refY } = useWebAnimations({
    id: "charY",
    keyframes: {
      color: [
        "#FF0900",
        "#A800ff",
        "#0079FF",
        "#00F11D",
        "#FFEF00",
        "#FF7F00",
        "#FF0900",
      ],
    },
    animationOptions: { duration: 5000, iterations: 50 },
  });

  return (
    <div className={styles.NavBar}>
      <span className={styles.charQ} ref={refQ}>
        Q
      </span>
      <span className={styles.charW} ref={refW}>
        W
      </span>
      <span className={styles.charE} ref={refE}>
        E
      </span>
      <span className={styles.charR} ref={refR}>
        R
      </span>
      <span className={styles.charT} ref={refT}>
        T
      </span>
      <span className={styles.charY} ref={refY}>
        Y
      </span>
      <div className={styles.btnContainer}>
        <span className={styles.menuBtn}>
          <FaBars />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
