// import { useState } from "react";
// import Data from "./Data";
// import Button from "./Button";
import Dashboard from "./Dashboard";
import Profile from "./Profile";

const App = () => {
  // let [data, setData] = useState("Hello World");

  const aData = [
    {
      Pname: "John",
      Btnname: "Edit Profile",
    },
    {
      Pname: "John",
      Btnname: "Edit Profile",
    },
    {
      Pname: "John",
      Btnname: "Edit Profile",
    },
    {
      Pname: "John",
      Btnname: "Login",
    },
    {
      Pname: "John",
      Btnname: "Edit Profile",
    },
    {
      Pname: "John",
      Btnname: "Edit Profile",
    },
  ];
  return (
    <div>
      <Dashboard data={aData} />
    </div>
  );
};

export default App;
