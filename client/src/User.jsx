import { useContext, useState } from "react";
import { AppContext } from "./store/context";
import { Link } from "react-router";

const User = () => {
  let ContextData = useContext(AppContext);
  let [newName, setNewName] = useState("");
  console.log(ContextData);

  function UpdateName() {
    ContextData.setName(newName);
  }
  return (
    <div>
      <Link to={"/newUser"}>Got to NewUser</Link>
      <h1>User Name: {ContextData.name}</h1>
      <h1>User Age : {ContextData.age}</h1>

      <input
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        name="newname"
        type="text"
      />
      <button
        onClick={() => {
          UpdateName();
        }}
      >
        {" "}
        Update Name
      </button>
    </div>
  );
};

export default User;
