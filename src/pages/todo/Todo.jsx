import React, { useReducer, useState } from "react";
import TodoHd from "./components/TodoHd";
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";

const mockTodo = [
  {
    id: 1,
    isDone: false,
    task: "고양이 밥주기",
    createdDate: new Date().getTime(), // 현재 시간
  },
  {
    id: 2,
    isDone: false,
    task: "감자 캐기",
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    task: "고양이 놀아주기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "UPDATE":
      return state.map((it) =>
        it.id === action.payload ? { ...it, isDone: !it.isDone } : it
      );
    case "DELETE":
      return state.filter((it) => it.id !== action.payload);
    default:
      return state;
  }
}

const Todo = () => {
  // const [todo, setTodo] = useState(mockTodo);
  // const addTodo = (task) => {
  //   const newTodo = {
  //     id: todo.length + 1,
  //     isDone: false,
  //     task,
  //     createdDate: new Date().getTime(),
  //   };
  //   setTodo([newTodo, ...todo]);
  // };
  // const onUpdate = (id) => {
  //   // id에 해당하는 할 일의 isDone을 변경합니다.
  //   setTodo(
  //     // map() 함수를 이용하여 todo 배열을 순회하면서 id에 해당하는 할 일의 isDone을 변경합니다.
  //     todo.map((item) => {
  //       // id에 해당하는 할 일의 isDone을 변경합니다.
  //       if (item.id === id) {
  //         return { ...item, isDone: !item.isDone };
  //       }
  //       // 변경된 할 일을 반환합니다.
  //       return item;
  //     })
  //   );
  // };
  // const onDelete = (id) => {
  //   // 해당 id 요소를 뺀 나머지 요소들만 반환합니다.
  //   setTodo(todo.filter((item) => item.id !== id));
  // };
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      isDone: false,
      task,
      createdDate: new Date().getTime(),
    };
    dispatch({ type: "ADD", payload: newTodo });
  };
  const onUpdate = (id) => {
    dispatch({ type: "UPDATE", payload: id });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <div>
      <TodoHd />
      <TodoEdit addTodo={addTodo} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
