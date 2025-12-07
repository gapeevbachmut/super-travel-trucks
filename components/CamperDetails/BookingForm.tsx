"use client";

import { Camper } from "@/types/camper";
import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}
const initialValues: FormValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string().max(500, "Comment is too long (max 500 characters)"),
});
///////////////////////////////////////
type Props = { camper: Camper };

const BookingForm = ({ camper }: Props) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    //  містить усі дані форми + camperId
    const dataToSend = {
      ...values,
      camperId: camper.id,
    };

    console.log("Бронювання", dataToSend);
    //////////////////////////////////
    actions.resetForm(); // скидання полів форми
    actions.setSubmitting(false);
  };
  return (
    <div className={css.formWrapper}>
      <div className={css.header}>
        <h2 className={css.title}>Book your campervan now</h2>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.fieldContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.fieldContainer}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <Field
                type="date"
                name="bookingDate"
                placeholder="Booking date*"
                className={`${css.input} ${css.dateInput}`}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.fieldContainer}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                rows={5}
                className={`${css.input} ${css.textarea}`}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              className={css.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
