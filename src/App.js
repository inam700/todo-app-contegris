import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import Todos from "./components/todo/todos";
import AddTodo from "./components/todo/addTodo";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Todos} />
          <Route path="/add_todo" component={AddTodo} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
