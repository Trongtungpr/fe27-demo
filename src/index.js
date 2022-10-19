import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { todoStore } from "./mobx-store/TodoItemStore";
import MiniTodoApp from "./redux-demo/MiniTodoApp";
import { Provider } from "react-redux";
import { store } from "./redux-demo/redux/store/todoStore";
import { appStore } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={appStore}>
      <App store={todoStore} />
    </Provider>

    {/* <div className="App">
        <Provider store={store}>
          <MiniTodoApp />
        </Provider>
      </div> */}
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
