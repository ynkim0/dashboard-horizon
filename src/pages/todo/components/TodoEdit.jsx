import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const TodoEdit = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const onChange = (e) => setTask(e.target.value);
  const onSubmit = () => {
    if (!task) return;
    addTodo(task);
    setTask("");
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <Box py={5}>
      <Heading as={"h2"} fontSize={20}>
        새로운 todo 작성하기
      </Heading>
      <Flex py={3}>
        <Input
          ref={(inputRef) => inputRef && inputRef.focus()}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={task}
          mb={3}
          type="text"
          placeholder="할 일을 추가하세요."
          bg={"white"}
        />
        <Button onClick={onSubmit}>추가</Button>
      </Flex>
    </Box>
  );
};

export default TodoEdit;
