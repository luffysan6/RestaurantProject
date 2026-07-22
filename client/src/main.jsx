import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Data from "./Data.jsx";
import AppProvider from "./store/context.jsx";
import User from "./User.jsx";
import NewUser from "./NewUser.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newData" element={<Data />} />
        <Route path="/profile" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>,
);
