import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

function Login(props) {
    const [userType, setUsertype] = useState('login');

    let schemaObj, inintVal;

    if (userType === 'login') {
        schemaObj = {
            email: yup.string().required("email is requiredl").email('enter valid email'),
            password: yup.string().required('password is required'),
        }
        inintVal = {
            email: '',
            password: '',
        }

    } else if (userType === 'signup') {
        schemaObj = {
            name: yup.string().required("Name is required"),
            email: yup.string().required("email is requireds").email('enter valid email'),
            password: yup.string().required('password is required'),
        }
        inintVal = {
            name: '',
            email: '',
            password: ''
        }
    }

    let schema = yup.object().shape(schemaObj);

    const formik = useFormik({
        // initialValues: {
        //   email: '',
        //   password: ''
        // },
        initialValues: inintVal,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { errors, handleBlur, handleChange, handleSubmit, touched } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        userType === 'password' ?
                            <h2>Reset password</h2> :
                            userType === 'login' ?
                                <h2>Login</h2> :
                                <h2>Sign Up</h2>
                    }
                </div>
                <Formik values={formik}>
                    <Form className="php-email-form" onSubmit={handleSubmit}>
                        <div>
                            {
                                userType === 'login' || userType === 'password' ?
                                    <div className="col-md-4 form-group row mx-auto">
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Registerd email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {
                                        errors.email && touched.email ? <span className='error'>{errors.email}</span> : ''
                                        }
                                        
                                    </div>
                                    :
                                    <>
                                        <div className="col-md-4 form-group row mx-auto">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {
                                                errors.name && touched.name ? 
                                                <span className='error'>{errors.name}</span> :
                                                ''
                                            }
                                            
                                        </div>
                                    </>
                            }

                            {
                                userType === 'password' ?
                                    <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Client ID"
                                        />
                                    </div> :
                                    userType === 'login' ?
                                        <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">

                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password" placeholder="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {
                                                errors.password && touched.password ? 
                                                <span className='error'>{errors.password}</span> :
                                                ''
                                            }
                                            

                                        </div>
                                        :
                                        <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">

                                            <input
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                id="mail"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                             {
                                                errors.email && touched.email ? 
                                                <span className='error'>{errors.email}</span> :
                                                ''
                                            }
                                           

                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control mt-2"
                                                id="password"
                                                placeholder="Create new password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                            {
                                                errors.password && touched.password ? 
                                                <span className='error'>{errors.password}</span> : ''
                                            }
                                        </div>

                            }


                            {
                                userType === 'password' ?
                                    null
                                    :
                                    userType === 'login' ?
                                        <div className='signup-link text-center col-4' >
                                            <a className='d-inline-block' onClick={() => setUsertype('signup')}>Are you a new user?</a>
                                            <a className='d-inline-block ' onClick={() => setUsertype('password')}>Forgott password?</a>
                                        </div>
                                        :
                                        <div className='signup-link col-4'>
                                            <a className='d-inline-block' onClick={() => setUsertype('login')}>Already user?</a>
                                        </div>
                            }
                            {
                                userType === 'password' ?
                                    <div class="text-center mt-3"><button type="submit">Send OTP</button></div> :
                                    userType === 'login' ?
                                        <div class="text-center mt-3"><button type="submit">Login</button></div>
                                        :
                                        <div class="text-center mt-3"><button type="submit">Sign Up</button></div>
                            }

                        </div>


                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default Login;