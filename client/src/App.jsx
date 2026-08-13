import AppRouter from "./AppRouter";
import AuthStore from "./store/AuthStore";
// import Auth from "../store/AuthStore";
import { useEffect } from "react";
const App = () => {
  const { checkAuthApi } = AuthStore();

  const getAuthCheck = async () => {
    checkAuthApi();
  };
  useEffect(() => {
    getAuthCheck();
  }, []);
  return <AppRouter />;
};

export default App;
