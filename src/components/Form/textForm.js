import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Register() {
  return (
    <div className="Register">
      <Formik
        initialValues={{ name: "", email: "", address: "", number: "", }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Nome é necessário';
          }else if (!values.email) {
            errors.name = 'E-mail é necessário';
          } else {
            return errors; 
        }
        
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form><p>Nome:</p>
            <Field type="text" name="name" />
            <br />
            <ErrorMessage name="name" component="div" />
            <br /><p>E-mail:</p>
            <Field type="text" name="email" />
            <br />
            <ErrorMessage name="email" component="div" />
            <br /><p>Endereço:</p>
            <Field type="text" name="address" />
            <br />
            <ErrorMessage name="address" component="div" /><p>Telefone:</p>
            <Field type="text" name="number" />
            <br />
            <ErrorMessage name="number" component="div" />
            <p><button type="submit" disabled={isSubmitting}>
              Enviar
            </button></p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;