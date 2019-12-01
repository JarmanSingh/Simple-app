import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import store from "./store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
