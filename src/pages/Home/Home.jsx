import React from "react";
import { connect } from "react-redux";
import InputForm from "../../components/InputForm/InputForm";
import styles from "./Home.module.sass";

const Home = (props) => (
  <div className={styles.mainContainer}>
    <div className={styles.inputContainer}>
      <div className={styles.inputFormContainer}>
        <InputForm history={props.history} />
      </div>
    </div>
  </div>
);

// const mapDispatchToProps = (dispatch) => ({

// });

export default Home;
