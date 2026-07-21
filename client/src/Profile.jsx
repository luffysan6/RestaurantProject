import React from "react";
import Button from "./Button";

const Profile = (props) => {
  return (
    <div>
      <h1>{props.Pname}</h1>
      <Button Btntitle={props.btnName} />
    </div>
  );
};

export default Profile;
