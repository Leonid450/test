import * as yup from "yup";

export default {
  InputSchem: yup.object().shape({
    username: yup
      .string()
      .test(
        "tes",
        "min 4 symbols",
        (value) => value && value.trim().length >= 4
      )
      .required("required"),
  }),
};
