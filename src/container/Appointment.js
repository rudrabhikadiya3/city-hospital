import React from "react";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";

function Appointment(props) {
  const schema = yup.object().shape({
    name: yup.string().required('Please enter a name'),
    // age: yup.number().required().positive().integer(),
    email: yup.string().required('Please enter an Email').email("Please enter a valid Email address"),
    phone: yup.number().required('Please enter a number').max(10, 'Please enter valid number').integer("A phone number can't include a decimal point"),
    // website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      date:"",

    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, handleBlur, handleChange, handleSubmit } = formik;
  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec
              lacinia finibus tortor. Curabitur luctus eleifend odio. Phasellus
              placerat mi et suscipit pulvinar.
            </p>
          </div>
          <Formik values={formik}>
            <Form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                  <span className="error">{errors.name}</span>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                  <span className="error">{errors.email}</span>
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                  />
                   <span className="error">{errors.phone}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="datetime"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  defaultValue={""}
                />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}

export default Appointment;
