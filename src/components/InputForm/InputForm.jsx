import React from "react";
import history from "../../browserHistory";
import { connect } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./InputForm.module.sass";
import { getUser } from "../../store/slices/userSlice";
import Schems from "../../utils/validationSchems";

const InputForm = (props) => {
  const handleSubmit = ({ username }, formikBag) => {
    console.log(username);
    props.getUser(username);
    history.replace(`/:${username}`);

    formikBag.resetForm();
  };
  if (props.user) {
    window.location.reload();
  }
  return (
    <>
      <div className={styles.loginForm}>
        <h2>Find your resume</h2>
        {props.error && (
          <div>
            <p>user with given username doesn’t exist</p>
          </div>
        )}
        <Formik
          initialValues={{
            username: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={Schems.InputSchem}
        >
          <Form>
            <div className={styles.inputContainer}>
              <label htmlFor="username" className={styles.label}>
                GitHub username :
              </label>
              <Field
                type="text"
                name="username"
                className={styles.input}
                placeholder={"Write here your username"}
              />

              <ErrorMessage
                name="username"
                component="div"
                className={styles.error}
              />
            </div>
            <div>
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (values) => dispatch(getUser(values)),
});
const mStP = (state) => ({
  user: state.userStore.data,
  error: state.userStore.error,
});
export default connect(mStP, mapDispatchToProps)(InputForm);
