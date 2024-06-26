import React from 'react';
import Loginart from "../assets/Loginart.png";
import { Link } from "react-router-dom";

function QuestionPage() {
  return (
    <div className="quection-wrapper">
      <div className="qw-1">
        <div className="qw-2">
          <div className="signin10">
            <div className="signin11">
              <div className="signin111">Question Page 01</div>
              <div className="signin112">
                Sign up today. Cover all your Favorite Places with us.
              </div>
              <label className='quection' htmlFor="username">1. What is your Preferred Travel Destination?</label>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Beach Paradise</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Cultural adventure
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Nature and wildlife
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Urban exploration
                  </label>
                </div>
              </div>
              <Link to="/selectanswer" className="submit-que">
              Next
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
}

export default QuestionPage;
