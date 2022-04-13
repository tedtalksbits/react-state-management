import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CountContextProvider } from "./context/CountContext";
import { Provider } from "react-redux";
import store from "./store";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);
root.render(
  <Provider store={store}>
    <CountContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CountContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
