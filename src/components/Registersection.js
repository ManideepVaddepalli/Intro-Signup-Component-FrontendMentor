import React from "react";
import { useState } from "react";
export default function Registersection() {
  const [firstname, setFirstname] = useState("");
  const changeFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const [lastname, setLastname] = useState("");
  const changeLastname = (e) => {
    setLastname(e.target.value);
  };
  const [email, setEmail] = useState("");
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="registration-section">
      <div>
        <input
          onChange={changeFirstname}
          value={firstname}
          className="firstname"
          type="text"
          placeholder="First Name"
        ></input>
        <svg
          className="hide"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#FF7979" cx="12" cy="12" r="12" />
            <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
            <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
          </g>
        </svg>
        <p className="hide">First Name cannot be empty</p>
      </div>
      <div>
        <input
          onChange={changeLastname}
          value={lastname}
          className="lastname"
          type="text"
          placeholder="Last Name"
        ></input>
        <svg
          className="hide"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#FF7979" cx="12" cy="12" r="12" />
            <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
            <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
          </g>
        </svg>
        <p className="hide">Last Name cannot be empty</p>
      </div>
      <div>
        <input
          onChange={changeEmail}
          value={email}
          className="email"
          type="text"
          placeholder="Email Address"
        ></input>
        <svg
          className="hide"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#FF7979" cx="12" cy="12" r="12" />
            <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
            <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
          </g>
        </svg>
        <p className="hide">Looks like this is not an email</p>
      </div>
      <div>
        <input
          onChange={changePassword}
          value={password}
          className="password"
          type="password"
          placeholder="Password"
        ></input>
        <svg
          className="hide"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle fill="#FF7979" cx="12" cy="12" r="12" />
            <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
            <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
          </g>
        </svg>
        <p className="hide">Password cannot be empty</p>
      </div>
      <button type="button" onClick={clicked}>
        <h4>CLAIM YOUR FREE TRIAL</h4>
      </button>
      <p>
        By clicking the button, you are agreeing to our{" "}
        <span>Terms and services.</span>
      </p>
    </div>
  );
}

function clicked() {
  let textboxs = document.querySelectorAll("input");
  let boxsvg = document.querySelectorAll("svg");
  let para = document.querySelectorAll("p");

  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
      case 1:
      case 3:
        if (textboxs[i].value == "") {
          boxsvg[i].classList.remove("hide");
          para[i + 1].classList.remove("hide");
        } else {
          boxsvg[i].classList.add("hide");
          para[i + 1].classList.add("hide");
        }
        break;
      case 2:
        let expression =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (expression.test(textboxs[i].value)) {
          boxsvg[i].classList.add("hide");
          para[i + 1].classList.add("hide");
          // } else if (textboxs[i].value == "") {
          //   boxsvg[i].classList.remove("hide");
          //   para[i + 1].classList.remove("hide");
        } else {
          boxsvg[i].classList.remove("hide");
          para[i + 1].classList.remove("hide");
        }
        break;
    }
  }
}
