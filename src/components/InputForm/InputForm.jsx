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
    window.location.reload();
    formikBag.resetForm();
  };

  return (
    <>
      <div className={styles.loginForm}>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
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
export default connect(null, mapDispatchToProps)(InputForm);
