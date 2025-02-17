import React, { useEffect } from "react";
import { connect } from "react-redux";
import InputForm from "../../components/InputForm/InputForm";
import styles from "./Home.module.sass";
const Home = (props) => {
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
// const mapDispatchToProps = (dispatch) => ({
//   getUserdata: () => dispatch(getUserdata()),
// });
// const mStP = (state) => ({
//   user: state.userStore.data,
// });
export default Home;
