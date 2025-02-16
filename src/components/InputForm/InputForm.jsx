import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Formik, Field, ErrorMessage } from "formik";
import styles from "./InputForm.module.sass";
// import FormInput from "../FormInput/FormInput";
import Schems from "../../utils/validationSchems";

const InputForm = (props) => {
  return (
    <div className={styles.loginForm}>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <Formik
        initialValues={{
          username: "",
        }}
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
  );
};

export default InputForm;
