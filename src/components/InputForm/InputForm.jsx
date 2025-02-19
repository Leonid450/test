import React from "react";
import { connect } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./InputForm.module.sass";
import { getUser } from "../../store/slices/userSlice";
import Schems from "../../utils/validationSchems";
import { useNavigate } from "react-router-dom";

const InputForm = (props) => {
  let navigate = useNavigate();
  const handleSubmit = ({ username }, formikBag) => {
    props.getUser(username);

    formikBag.resetForm();
  };
  if (props.user) {
    navigate(`/:${props.user.login}`);
  }
  return (
    <>
      <div className={styles.loginForm}>
        <h2>Find your resume</h2>
        {props.error && (
          <div className={styles.notFound}>
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
