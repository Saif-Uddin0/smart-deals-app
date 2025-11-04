import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                 {/* name */}
                                <label className="label">Name</label>
                                <input
                                    required
                                    name='name'
                                    type="text"
                                    className="input"
                                    placeholder="Email" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input
                                    required
                                    name='email'
                                    type="email"
                                    className="input"
                                    placeholder="Email" />
                                    {/* URL */}
                                <label className="label">Imge-URL</label>
                                <input
                                    required
                                    name='url'
                                    type="url"
                                    className="input"
                                    placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input
                                    required
                                    name='password'
                                    type="password"
                                    className="input"
                                    placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <p><Link to={'/login'} className='text-primary underline text-center'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;