import React from "react";
import RegisterAuth from "../components/auth/RegisterAuth";

const Register = (props) => {
  return (
    <div>
      <RegisterAuth userData={props.userData} />
    </div>
  );
};

export default Register;
