import React from "react";
import Register from "../components/auth/Register";

const RegisterPage = (props) => {
  return (
    <div>
      <Register userData={props.userData} />
    </div>
  );
};

export default RegisterPage;
