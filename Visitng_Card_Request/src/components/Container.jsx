import React, { useState } from "react";
import styles from "../styles/Container.module.css";

const Container = ({ initialName = "Somashree Nandy", initialDOJ = "10-Oct-2024" }) => {
  // use state to follow the instruction to use hooks (keeps component interactive)
  const [employeeName] = useState(initialName);
  const [dateOfJoining] = useState(initialDOJ);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Employee Details</div>

      <div className={styles.employeeBox} role="group" aria-label="Employee details">
        <div className={styles.infoItem}>
          <div className={styles.label}>Employee Name</div>
          <div className={styles.value} style={{ color: '#333333' }}>{employeeName}</div>
        </div>

        <div className={`${styles.infoItem} ${styles.right}`}>
          <div className={styles.label}>Date of Joining</div>
          <div className={styles.value} style={{ color: '#333333' }}>{dateOfJoining}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
