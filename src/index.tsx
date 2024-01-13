import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import MainProvider from "./components/MainProvider";
import { onRender } from "./lib/profiler";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <BrowserRouter>
        <MainProvider>
          <App />
        </MainProvider>
      </BrowserRouter>
    </Profiler>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
