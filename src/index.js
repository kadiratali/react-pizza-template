import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const ContextName = createContext();

const futbolcu = {
  name: "Ali",
  surname: "Yilmaz",
};

ReactDOM.render(
  <React.StrictMode>
    <ContextName.Provider value={futbolcu}>
      <App />
    </ContextName.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
