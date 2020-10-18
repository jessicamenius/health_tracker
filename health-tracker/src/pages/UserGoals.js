import React from "react";
import BuildProfile from "../components/BuildProfile";

const UserGoals = (props) => {
  return (
    <div>
      <BuildProfile userData={props.userData} />
    </div>
  );
};

export default UserGoals;
