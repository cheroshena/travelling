import React from 'react';
import Loginart from "../assets/Loginart.png";
import { Link } from "react-router-dom";

function AccomQuection() {
  return (
    <div className="quection-wrapper">
      <div className="qw-1">
        <div className="qw-2">
          <div className="signin10">
            <div className="signin11">
              <div className="signin111">Question Page 03</div>
              <label className='quection' htmlFor="username">3.What type of accommodation do you prefer ?</label>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Camping or Backpacker Hostels</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Ecolodge</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Vila</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>5-star Hostels</label>
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

export default AccomQuection;
