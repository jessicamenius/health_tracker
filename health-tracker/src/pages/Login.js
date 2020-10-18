import React from "react";
import LoginAuth from "../components/auth/LoginAuth";

const Login = (props) => {
  return (
    <div>
      <LoginAuth userData={props.userData} setUserData={props.setUserData} />
    </div>
  );
};

export default Login;
