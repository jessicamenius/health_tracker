import React from "react";
import LoginCom from "../components/auth/LoginCom";
const Login = (props) => {
  return (
    <div>
      <LoginCom userData={props.userData} setUserData={props.setUserData} />
    </div>
  );
};
export default Login;