import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  PopularContextProvider,
  RecomContextProvider,
  CartoonContextProvider,
  AuthContextProvider,
  SeriesContextProvider,
} from "./context";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={1300} maxSnack={4}>
      <BrowserRouter>
        <PopularContextProvider>
          <RecomContextProvider>
            <CartoonContextProvider>
              <AuthContextProvider>
                <SeriesContextProvider>
                  <App />
                </SeriesContextProvider>
              </AuthContextProvider>
            </CartoonContextProvider>
          </RecomContextProvider>
        </PopularContextProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
);
