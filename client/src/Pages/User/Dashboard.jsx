import { Outlet } from "react-router";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Dashboard;
