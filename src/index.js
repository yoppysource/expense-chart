import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 보통은 불가능한 일 자바 스크립트에 css 파일 임포트..?
import App from "./App"; // 컴포넌트이다!
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
