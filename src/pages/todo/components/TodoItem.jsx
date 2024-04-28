import { Button, Checkbox, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

const TodoItem = ({ id, isDone, task, createdDate, onUpdate, onDelete }) => {
  return (
    <Flex as={"li"} alignItems={"center"} gap={3} key={id}>
      <Checkbox
        name=""
        id=""
        checked={isDone}
        mx={5}
        onChange={() => onUpdate(id)}
      >
        <Text
          textDecoration={isDone ? "line-through" : "none"}
          as={"strong"}
          fontSize={20}
          fontWeight={600}
        >
          {task}
        </Text>
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </Checkbox>
      <Spacer />
      <Button onClick={() => onDelete(id)}>삭제</Button>
    </Flex>
  );
};

export default TodoItem;
