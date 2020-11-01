import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./textForm.css"

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
          <Form class="class-form">
              <p class='text-form'>Nome</p>
              <Field type="text" name="name" class="box" />
              <br />
              <ErrorMessage name="name" component="div" />
              <br /><p class='text-form'>E-mail</p>
              <Field type="text" name="email" class="box"/>
              <br />
              <ErrorMessage name="email" component="div" />
              <br /><p class='text-form'>Endereço</p>
              <Field type="text" name="address" class="box" />
              <br />
              <ErrorMessage name="address" component="div" /><p class='text-form'>Telefone</p>
              <Field type="text" name="number" class="box" />
              <br />
              <ErrorMessage name="number" component="div" />
              <p><button type="submit" disabled={isSubmitting} class="button-form">
                Enviar
              </button></p>            
          </Form>           
        )}
      </Formik>
    </div>
  );
}

export default Register;