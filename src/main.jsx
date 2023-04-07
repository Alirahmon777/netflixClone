import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  PopularContextProvider,
  RecomContextProvider,
  CartoonContextProvider,
} from "./context";
import { SnackbarProvider } from "notistack";
import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={1300} maxSnack={4}>
      <PopularContextProvider>
        <RecomContextProvider>
          <CartoonContextProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </CartoonContextProvider>
        </RecomContextProvider>
      </PopularContextProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
