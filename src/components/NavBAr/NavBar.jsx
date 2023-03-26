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
    timing: { duration: 5000, iterations: Infinity },
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
    timing: { duration: 5000, iterations: Infinity },
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
    timing: { duration: 5000, iterations: Infinity },
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
    timing: { duration: 5000, iterations: Infinity },
  });
  // rgba(0-255, 0-255, 0-255, 0-1)
  // rgb(0, 0, 0) = #000000, #000
  // rgb(255, 255, 255) = #ffffff
  // rgb(100, 100, 100) = #646464
  // #RRGGBB
  // Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  // Hexa-Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1A, 1B, 1C, 1D, 1E, 1F, 20, ...

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
    timing: { duration: 5000, iterations: Infinity },
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
    timing: { duration: 5000, iterations: Infinity },
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
