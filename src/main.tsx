import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </Provider>
    </StrictMode>
  </React.StrictMode>
);
