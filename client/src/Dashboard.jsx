// import React from 'react'
import Profile from "./Profile";

const Dashboard = (props) => {
  return (
    <div>
      {props.data.map((value) => {
        return <Profile Pname={value.Pname} btnName={value.Btnname} />;
      })}
    </div>
  );
};

export default Dashboard;
