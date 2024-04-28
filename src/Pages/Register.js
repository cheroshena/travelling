import React from 'react'
import { Link } from "react-router-dom";
import Loginart from "../assets/Loginart.png";


function Register () {
  return (
    <div className="signin">
    <div className="signin0">
      <div className="signin1">
        <div className="signin10">
          <div className="signin11">
            <div className="signin111">Sign Up / Register</div>
            <div className="signin112">
              Sign up today. Cover all your Favorite Places with us.
            </div>
            <div className="signin113">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Your username"
                className="signinput"
              />
            </div>
            <div className="signin113">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="signinput"
              />
            </div>
            <div className="signin113">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                className="signinput"
              />
            </div>
            <div className="signin113">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="signinput"
              />
            </div>
            <div className="signin113">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="signinput"
              />
            </div>
            <div className="signin115">Sign up</div>
          </div>
          <div className="signin14">
            Already have an account?{' '}
            <Link to="/login" className="sss" style={{ textDecoration: 'none' }}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="signin2">
        <img src={Loginart} alt="Login Art" />
      </div>
    </div>
  </div>
);
};


export default Register;
