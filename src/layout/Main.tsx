import { Navbar } from "@/components/Navigation";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Footer from "@/pages/Footer";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="w-full bg-black">
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Main;
