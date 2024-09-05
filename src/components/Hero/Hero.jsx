import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akhil Gannevaram</h1>
        <p className={styles.description}>
         Aspiring Full Stack Java Developer in Training | Intern at EazyByts Infotech
          Seeking a Challenging role in a dynamic Software solutions.
        </p>
        <a href="mailto:gannevaramakhilchary@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mypic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
