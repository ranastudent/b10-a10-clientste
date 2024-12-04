import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nabvar = () => {
      return (
            <div className="navbar bg-base-100">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <NavLink to='/home'><li>
                                          <a>Home</a>
                                    </li></NavLink>
                                    <NavLink to='/'><li><a>All Campaign</a></li></NavLink>
                                    <NavLink to='/addNewCampaign'><li><a>Add New Campaign</a></li></NavLink>
                                    <NavLink to='/myCampaign'><li><a>My Campaign</a></li></NavLink>
                                    <NavLink to='/myDonation'><li><a>My Donation</a></li></NavLink>
                              </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Crowd Founding</a>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              <NavLink to='/home'><li>
                                    <a>Home</a>
                                    
                              </li></NavLink>
                              <NavLink to='/'><li><a>All Campaign</a></li></NavLink>
                              <NavLink to='/addNewCampaign'><li><a>Add New Campaign</a></li></NavLink>
                              <NavLink to='/myCampaign'><li><a>My Campaign</a></li></NavLink>
                              <NavLink to='/myDonation'><li><a>My Donation</a></li></NavLink>
                        </ul>
                  </div>
                  <div className="navbar-end space-x-5">
                        <Link to='login'><a className="btn">Login</a></Link>
                        <Link to='register'><a className="btn">Register</a></Link>
                  </div>
            </div>
      );
};

export default Nabvar;