import OTPVerification from "@/components/OTPVerification";
import Main from "@/layout/Main";
import About from "@/pages/About";
import Exam from "@/pages/Exam";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";
import SinglePageExam from "@/pages/SinglePageExam";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/exam",
        element: <Exam />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/verify-email",
        element: <OTPVerification />,
      },
      {
        path: "/exam/:questionId",
        element: (
          <ProtectedRoute>
            <SinglePageExam />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
