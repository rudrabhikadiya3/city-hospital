import React, { useState } from 'react';

function Login(props) {
    const [userType, setUsertype] = useState('login')
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        userType === 'login' ?
                            <h2>Login</h2> :
                            <h2>Sign Up</h2>
                    }
                </div>
                <form action method="post" role="form" className="php-email-form">
                    <div>
                        <div className="col-md-4 form-group row mx-auto">
                            {
                                userType === 'login' ?
                                    <input type="mail" name="mail" className="form-control" id="mail" placeholder="Email" /> :
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Name" />
                            }

                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0 row mx-auto">
                            {
                                userType === 'login' ?
                                    <input type="password" className="form-control" name="password" id="password" placeholder="password"/> :
                                    <input type="mail" name="mail" className="form-control" id="mail" placeholder="Email" /> 
                                    
                            }

                        </div>
                        <div>
                            <a to="/" className='d-inline-block mx-auto' onClick={() => setUsertype('SignUp')}>New user?</a>
                        </div>
                        {
                                userType === 'login' ?
                                <div class="text-center mt-3"><button type="submit">Login</button></div> 
                                :
                                <div class="text-center mt-3"><button type="submit">Sign Up</button></div>
                                    
                            }
                        
                    </div>


                </form>
            </div>
        </section>

    );
}

export default Login;