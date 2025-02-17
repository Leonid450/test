import React from "react";

import InputForm from "../../components/InputForm/InputForm";
import styles from "./Home.module.sass";
const Home = (props) => {
  console.log(props);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputFormContainer}>
            <InputForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
