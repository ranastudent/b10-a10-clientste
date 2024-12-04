import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
      return (
            <div>
                  <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content">
                              <div className="text-center">
                                   
                              </div>
                              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" placeholder="Nmae" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo</span>
                                                </label>
                                                <input type="text" placeholder="Photo Url" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" placeholder="email" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" placeholder="password" className="input input-bordered" required />
                                                <label className="label">
                                                     <Link to='/login'>
                                                     <a  className="label-text-alt link link-hover text-red-700">Already Login?</a>
                                                     </Link>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Register;