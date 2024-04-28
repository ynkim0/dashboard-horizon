import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Box, Heading, Input } from "@chakra-ui/react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredTodo = () => {
    return todo.filter((item) => item.task.includes(search.toLowerCase()));
  };
  return (
    <Box pb={5}>
      <Heading as={"h2"} fontSize={20}>
        할 일 목록
      </Heading>
      <Input
        onChange={onChangeSearch}
        type="text"
        placeholder="search"
        my={3}
        bg={"white"}
      />
      <ul>
        {filteredTodo().map((item) => (
          <TodoItem
            key={item.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            {...item}
          />
        ))}
      </ul>
    </Box>
  );
};

export default TodoList;
