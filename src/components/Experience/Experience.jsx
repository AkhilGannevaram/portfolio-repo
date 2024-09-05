import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
        <h2 className={styles.title}>Internship Experience at EasyByts Infotech Organization- July 2024</h2>
          {history.map((historyitem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
              
                <div className={styles.historyItemDetails}>
                  <h3>{historyitem.title}</h3>
                  <h6>{historyitem.role}</h6>
                  <p>{historyitem.description}</p>
                  <p>{historyitem.Technologies}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
