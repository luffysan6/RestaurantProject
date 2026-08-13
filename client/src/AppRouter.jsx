import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Dasboard from "./libs/Dasboard.jsx";
import Protector from "./Component/Protector.jsx";
import Footer from "./Component/Footer.jsx";
import Header from "./Component/Header";
import Explore from "./Pages/User/Explore.jsx";
import GuestRoute from "./Component/GuestRoute.jsx";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<GuestRoute />}>
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
          </Route>

          <Route path="/explore" element={<Explore />} />
          <Route element={<Protector />}>
            <Route
              path="/dashboard"
              element={
                <>
                  <Header />
                  <Dasboard />
                  <Footer />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
