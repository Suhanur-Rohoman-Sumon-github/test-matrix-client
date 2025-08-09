// src/utils/useLoadUserFromCookie.ts
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/redux/hook";
import { logOut, setUser } from "@/redux/fetures/auth/auth.slice";

type DecodedToken = {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  status: string;
  profilePicture: string;
  myChanel: string;
};

export function useLoadUserFromCookie() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (!accessToken) return;

    try {
      const decodedToken = jwtDecode<DecodedToken>(accessToken);

      const user = {
        id: decodedToken._id,
        name: decodedToken.name,
        username: decodedToken.username,
        email: decodedToken.email,
        role: decodedToken.role,
        status: decodedToken.status,
        profilePicture: decodedToken.profilePicture,
        myChanel: decodedToken.myChanel,
      };

      dispatch(setUser({ user, token: accessToken }));
    } catch (err) {
      console.error("Invalid token", err);
      dispatch(logOut())
    }
  }, [dispatch]);
}
