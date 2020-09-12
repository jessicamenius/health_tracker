import React from "react";
import LoginCom from "../components/auth/LoginCom";

export default Login = (props) => {
  return (
    <div>
      <LoginCom userData={props.userData} setUserData={props.setUserData} />
    </div>
  );
};
