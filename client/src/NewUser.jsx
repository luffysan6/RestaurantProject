import { useContext } from "react";
import { AppContext } from "./store/context";

const NewUser = () => {
  let ContextData = useContext(AppContext);
  return (
    <div>
      {ContextData.name} and {ContextData.age}
    </div>
  );
};

export default NewUser;
