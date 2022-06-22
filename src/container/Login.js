import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";

function Login(props) {
  const [userType, setUsertype] = useState("login");


  // form validation
  let schemaObj, inintVal;

  if (userType === "login") {
    schemaObj = {
      email: yup
        .string()
        .required("email is required")
        .email("enter valid email"),
      password: yup.string().required("password is required"),
    };
    inintVal = {
      email: "",
      password: "",
    };
  } else if (userType === "signup") {
    schemaObj = {
      name: yup.string().required("Name is required"),
      email: yup
        .string()
        .required("email is required")
        .email("enter valid email"),
      password: yup.string().required("password is required"),
    };
    inintVal = {
      name: "",
      email: "",
      password: "",
    };
  } else if (userType === "password") {
    schemaObj = {
      email: yup
        .string()
        .required("email is required")
        .email("enter valid email"),
    };
    inintVal = {
      email: "",
    };
  }

  let schema = yup.object().shape(schemaObj);

  // to local storage
  const handleData = (values) => {
    let localdata = JSON.parse(localStorage.getItem('login'));

    if (localdata === null) {
      localStorage.setItem('login', JSON.stringify([values]));
    } else {
      localdata.push(values);
      localStorage.setItem('login', JSON.stringify(localdata));
    }
  }

  const formik = useFormik({
    initialValues: inintVal,
    validationSchema: schema,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
      handleData(values)
    },
    enableReinitialize: true,
  });
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } = formik;



  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {userType === "password" ?
            <h2>Reset password</h2>
            : userType === "login" ?
              <h2>Login</h2>
              :
              <h2>Sign Up</h2>
          }
        </div>
        <Formik values={formik}>
          <Form className="php-email-form" onSubmit={handleSubmit}>
            <div>
              {userType === "login" || userType === "password" ?
                <div className="col-md-4 form-group row mx-auto">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Registerd email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ?
                    <span className="error">{errors.email}</span> : ""}
                </div>
                :
                <>
                  <div className="col-md-4 form-group row mx-auto">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name ?
                      <span className="error">{errors.name}</span>
                      :
                      ""
                    }
                  </div>
                </>
              }

              {userType === "password" ? null
                : userType === "login" ? (
                  <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <span className="error">{errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      id="mail"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email ?
                      <span className="error">{errors.email}</span>
                      :
                      ""
                    }

                    <input
                      type="password"
                      name="password"
                      className="form-control mt-2"
                      id="password"
                      placeholder="Create new password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                    />
                    {errors.password && touched.password ? (
                      <span className="error">{errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div>
                )}

              {userType === "password" ? null : userType === "login" ? (
                <div className="signup-link text-center col-4">
                  <a
                    className="d-inline-block"
                    onClick={() => setUsertype("signup")}
                  >
                    Are you a new user?
                  </a>
                  <a
                    className="d-inline-block "
                    onClick={() => setUsertype("password")}
                  >
                    Forgott password?
                  </a>
                </div>
              ) : (
                <div className="signup-link col-4">
                  <a
                    className="d-inline-block"
                    onClick={() => setUsertype("login")}
                  >
                    Already user?
                  </a>
                </div>
              )}
              {userType === "password" ? (
                <div className="text-center mt-3">
                  <button type="submit">Send OTP</button>
                </div>
              ) : userType === "login" ? (
                <div className="text-center mt-3">
                  <button type="submit">Login</button>
                </div>
              ) : (
                <div className="text-center mt-3">
                  <button type="submit">Sign Up</button>
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}

export default Login;
