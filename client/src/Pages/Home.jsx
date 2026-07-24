import { useState } from "react";
import Button from "../Component/Button";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import demo from "../store/demo";

const Home = () => {
  const { name, age, updateName, callApi } = demo();
  let [newName, setNewName] = useState("");
  console.log(demo());

  return (
    <>
      <Header />
      {/* <Button title={"Logout"} /> */}
      <h1 className="text-xl font-bold underline"> Name : {name} </h1>
      <h1 className="text-xl font-bold underline"> Age : {age}</h1>
      <input
        className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
        type="text"
        name=""
        id=""
        placeholder="Enter New Name"
        onChange={(e) => setNewName(e.target.value)}
      />

      {/* <button
        onClick={() => {
          updateName(newName);
          //   
        }}
      >
        Change Name
      </button> */}
      <Button
        title="Update Name"
        onclick={() => {
          updateName(newName);
        }}
      />

      <br />
      <Button title="Get Value" onclick={() => callApi()} />
      {/* <Button title={"Login"} /> */}
      <Footer />
    </>
  );
};

export default Home;
