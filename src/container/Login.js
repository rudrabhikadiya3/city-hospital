import React, { useState } from 'react';

function Login(props) {
    const [userType, setUsertype] = useState('login')
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
                <div className="php-email-form">
                    <div>
                        {
                            userType === 'login' || userType === 'password' ?
                                <div className="col-md-4 form-group row mx-auto">
                                    <input type="mail" name="mail" className="form-control" id="mail" placeholder="Registerd email" />
                                </div>
                                :
                                <div className="col-md-4 form-group row mx-auto">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Name" />
                                </div>
                        }

                        {
                            userType === 'password' ?
                                <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Client ID" />
                                </div> :
                                userType === 'login' ?
                                    <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="password" />
                                    </div>
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                                        <input type="mail" name="mail" className="form-control" id="mail" placeholder="Email" />
                                        <input type="password" name="password" className="form-control mt-2" id="password" placeholder="Create new password" />
                                        <input type="password" name="password" className="form-control mt-2" id="password" placeholder="Confirm password" />
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


                </div>
            </div>
        </section>

    );
}

export default Login;