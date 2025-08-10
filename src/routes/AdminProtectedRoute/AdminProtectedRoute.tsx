import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { useToken } from "../../redux/fetures/auth/auth.slice";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useCurrentUser } from "@/utils/getCurrentUser";

const AdminProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = Cookies.get("accessToken");
  const user = useCurrentUser();

  // Optionally add loading state if user fetch is async
  if (!user) {
    // Or show a spinner/loading UI
    return <p>Loading...</p>;
  }

  console.log(user);

  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }
  if (user.role !== "admin") {
    // Redirect to unauthorized page or home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
