import React from "react";
import FormGoals from "../components/FormGoals";

const UserGoals = (props) => {
  return (
    <div>
      <FormGoals userData={props.userData} />
    </div>
  );
};

export default UserGoals;
