// import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  // 대문자여야 하는 이유: 리엑트는 소문자 시작 요소는 html 요소고, 대문자 시작 요소는 사용자 정의 요소라고 판단함
  const expenses = [
    {
      id: "e1",
      title: "Toilt paper",
      amount: 283.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 283.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "dsd",
      amount: 283.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "2323e",
      amount: 283.67,
      date: new Date(2021, 2, 28),
    },
  ];
  // JSX 형식을 쓰면 이렇게 자동으로 변환됨
  // 왜 wrapping element가 필요한지 알 수 있음
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
