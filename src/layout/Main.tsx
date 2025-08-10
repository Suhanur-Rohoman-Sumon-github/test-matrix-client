import { Navbar } from "@/components/Navigation";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Footer from "@/pages/Footer";

import { Outlet } from "react-router-dom";
import { useLoadUserFromCookie } from "@/utils/useLoadUserFromCookie";
import { currentUser } from "@/redux/fetures/auth/auth.slice";
import { useCurrentUser } from "@/utils/getCurrentUser";

const Main = () => {
  const user = useCurrentUser();

  useLoadUserFromCookie();

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
