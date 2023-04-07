import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  PopularContextProvider,
  RecomContextProvider,
  CartoonContextProvider,
} from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopularContextProvider>
      <RecomContextProvider>
        <CartoonContextProvider>
          <App />
        </CartoonContextProvider>
      </RecomContextProvider>
    </PopularContextProvider>
  </React.StrictMode>
);
