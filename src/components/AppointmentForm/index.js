import { useFormik } from "formik";
import * as Yup from "yup";
import { PatternFormat } from "react-number-format";

import styles from "./AppointmentForm.module.scss";
import "../../style/global.module.scss";

export default function AppointmentForm() {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PHONE_REGEX =
    /^(?!#$)([(]{1}[0-9]{3}[)]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/;
  const NAME_REGEX = /^[a-z ,.'-]+$/i;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(NAME_REGEX, "No valid symbols")
        .required("Required"),
      email: Yup.string()
        .matches(EMAIL_REGEX, "No valid email address")
        .required("Required"),
      phone: Yup.string()
        .matches(PHONE_REGEX, "No valid number")
        .required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      clearInputs();
    },
  });

  const clearInputs = () => {
    formik.values.name = "";
    formik.values.email = "";
    formik.values.phone = "";
    formik.values.subject = "";
    formik.values.message = "";
  };

  return (
    <>
      <section className={styles.bg}>
        <div className={styles.container + " container"}>
          <form onSubmit={formik.handleSubmit}>
            <label>
              {formik.touched.name && formik.errors.name ? (
                <p className={styles.error}>{formik.errors.name}</p>
              ) : null}
              <input
                name="name"
                type="text"
                placeholder="Full Name *"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label>
              {formik.touched.email && formik.errors.email ? (
                <p className={styles.error}>{formik.errors.email}</p>
              ) : null}
              <input
                name="email"
                type="text"
                placeholder="Email Address *"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label>
              {formik.touched.phone && formik.errors.phone ? (
                <p className={styles.error}>{formik.errors.phone}</p>
              ) : null}
              <PatternFormat
                name="phone"
                type="text"
                placeholder="Phone Number *"
                format="(###)###-##-##"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label>
              {formik.touched.subject && formik.errors.subject ? (
                <p className={styles.error}>{formik.errors.subject}</p>
              ) : null}
              <input
                name="subject"
                type="text"
                placeholder="Subject *"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label>
              {formik.touched.message && formik.errors.message ? (
                <p className={styles.error}>{formik.errors.message}</p>
              ) : null}
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message *"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <input type="submit" value="Get An Appointment" />
          </form>
        </div>
      </section>
    </>
  );
}
