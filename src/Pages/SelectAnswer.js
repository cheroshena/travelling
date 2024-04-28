import React from 'react';
import Loginart from "../assets/Loginart.png";
import { Link } from "react-router-dom";

function SelectAnswer() {
  return (  
    <div className="quection-wrapper">
      <div className="qw-1">
        <div className="qw-2">
          <div className="signin10">
            <div className="signin11">
              <div className="signin111">Question Page 02</div>
              <div className="signin112">
                
              </div>
              <label className='quection' htmlFor="username">2.Select the Area?</label>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Hikkaduwa</label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Unawatuna
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Mirissa
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Arugam Bay Beach
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="ui radio checkbox quection-check">
                  <input type="radio" name="name1" checked="checked" />
                  <label>Nilaveli
                  </label>
                </div>
              </div>
              <Link to="/accomdanswer" className="submit-que">
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

export default SelectAnswer;
