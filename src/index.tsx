// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename={process.env.PUBLIC_URL}>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>  
    <App />
  </StrictMode>
);
