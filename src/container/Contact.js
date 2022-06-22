import React, { useRef } from 'react';
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";
function Contact(props) {
    // useRef hook (past practices)
    const nameRef = useRef();
    const mailRef = useRef();
    const subRef = useRef();

    const getVal = () => {
        console.log(nameRef.current.value + ' ' + mailRef.current.value);
        subRef.current.focus()
        subRef.current.style.background = '#FF63375e';
    }
    // validate form
    const schema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().required('Please enter an Email').email("Please enter a valid Email address"),
        subject: yup.string().required('Please enter subject'),
        message: yup.string().required('Please enter message').min(50, 'please enter atleast 50 characters'),
    });

    const formikObj = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formikObj;
    return (
        <main>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <h4>Location:</h4>
                                    <p> F-505, Inovative Plazza New Delhi, India</p>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <h4>Email:</h4>
                                    <p>cityhospital@example.com</p>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <h4>Call:</h4>
                                    <p>+91 9988776655</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <Formik>
                                <Form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" ref={nameRef} onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.name && errors.name ? <span className='error'>{errors.name}</span> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" ref={mailRef} onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.email && errors.email ? <span className='error'>{errors.email}</span> : null}
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" ref={subRef} onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {touched.subject && errors.subject ? <span className='error'>{errors.subject}</span> : null}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" onChange={handleChange}
                                            onBlur={handleBlur} />
                                        {touched.message && errors.message ? <span className='error'>{errors.message}</span> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" onClick={getVal}>Send Message</button></div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}

export default Contact;