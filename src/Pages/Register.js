import React from 'react'
import { Link } from "react-router-dom";
import Loginart from "../assets/Loginart.png";
import Google from "../assets/Google.png";
import Facebook from "../assets/Facebook.png";

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
                Email
                <input
                  name="myInput"
                  placeholder="Example@email.com"
                  className="signinput"
                />
              </div>
              <div className="signin113">
                Password
                <input
                  name="myInput"
                  placeholder="at least 8 characters"
                  className="signinput"
                />
                <div className="signin114">Forget password?</div>
              </div>

              <div className="signin115">Sign up</div>
            </div>
           


           
            <div className="signin14">
              you have an account?{" "}
              <Link
                to="/signin"
                className="sss"
                style={{ textDecoration: "none" }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <div className="signin2">
          <img src={Loginart} width="100%" height="100%" alt="aaa" />
        </div>
      </div>
    </div>
  )
}

export default Register;
