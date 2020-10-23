import { GET_TODOS, ADD_TODO } from "./types";
import axios from "axios";
export const getTodos = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  dispatch({
    type: GET_TODOS,
    payload: res.data,
  });
};

export const addTodo = (todo) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  dispatch({
    type: ADD_TODO,
    payload: res.data,
  });
};
