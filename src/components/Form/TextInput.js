import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ name: "", idade: "" }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            <br />
            <ErrorMessage name="name" component="div" />
            <br />
            <Field type="text" name="idade" />
            <br />
            <ErrorMessage name="idade" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;