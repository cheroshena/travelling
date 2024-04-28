import React from 'react'
import { Link } from "react-router-dom";
import Loginart from "../assets/Loginart.png";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";

function Login() {
  return (
    <div className="signin">
      <div className="signin0">
        <div className="signin1">
          <div className="signin10">
            <div className="signin11">
              <div className="signin111">Login</div>
              <div className="signin112">
                Today is a new day. It's your day. You shape it. Sign in to
                start managing your projects.
              </div>
              <div className="signin113">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example@email.com"
                  className="signinput"
                />
              </div>
              <div className="signin113">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="at least 8 characters"
                  className="signinput"
                />
                <Link to="/forgot-password" className="signin114">Forgot password?</Link>
              </div>

              <button className="signin115">Sign in</button>
            </div>

            <div className="signin14">
              <span>Don't you have an account? </span>
              <Link to="/register" className="regi-link">
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="signin2">
          <img src={Loginart} alt="Login Art" />
        </div>
      </div>
    </div>
  )
}

export default Login;