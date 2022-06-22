import React from "react";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";
import 'yup-phone';

function Appointment(props) {
    const schema = yup.object().shape({
    name: yup.string().required('Please enter a name'),
    email: yup.string().required('Please enter an Email').email("Please enter a valid Email address"),
    phone: yup.string().required('Please enter a number').phone(null, true, 'Please enter a valid number'),
    date: yup.string().required('Please enter a date'),
    department: yup.string().required('Please select an option'),
    message: yup.string().required('Please enter message').min(50, 'please enter atleast 50 characters')
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      phone: "",
      date:"",
      department: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, handleBlur, handleChange, handleSubmit, touched ,values } = formik;
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
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? 
                    <span className="error">{errors.name}</span> : null}
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type=""
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? 
                    <span className="error">{errors.email}</span> : null}
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone ? 
                    <span className="error">{errors.phone}</span> : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="date"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                  />
                {errors.date && touched.date ? 
                    <span className="error">{errors.date}</span> : null}
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  {errors.department && touched.department ? 
                    <span className="error">{errors.department}</span> : null}
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
               {errors.message && touched.message ? 
                    <span className="error">{errors.message}</span> : null}
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