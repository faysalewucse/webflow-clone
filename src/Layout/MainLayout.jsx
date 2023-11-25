import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Headline from "../components/navbar/Headline";
import Footer from "../components/footer/Footer";

export const MainLayout = () => {
  return (
    <div>
      <Headline />
      <Navbar />
      <div className="min-h-[90vh] bg-dark">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
