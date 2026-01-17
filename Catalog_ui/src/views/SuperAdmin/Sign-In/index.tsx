import React from "react";
import "./index.css";
import SignForm from "../../../component/superadmin/sign-in";
function SignIn() {
  return (
    <div>
      <div className="wrapper">
        {/* <img
          className="logoImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png"
          alt="Google Logo"
        /> */}
        <h1 className="titles"> Sign in </h1>
        <SignForm/>
      </div>
    </div>
  );
}

export default SignIn;
