import React, { useState } from 'react';
import { Button, Input, Container, Text, Paper } from '@mantine/core';



//structure of each to-do item
interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  
  //initialize to-do examples
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Teste", completed: false },
    { id: 2, text: "Teste2", completed: false }
  ]);

  const [input, setInput] = useState<string>("");

  //function to delete a to-do by ID
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  // Function to handle the button click event for adding a new todo
  const handleClick = () => {
    if (input.trim() !== "") {
      const newTodo: Item = { id: Date.now(), text: input, completed: false };
      //update the todo list adding a new item and clearing the input field
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInput("");
    }
  };


  

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #3498db, #9b59b6)',
      }}
    >
      <div className="text-center mb-6">
        <Text size="xl"  color="white">
        To-Do List
           
        </Text>
      </div>
      <Container size="sm">
        <Paper shadow="xs" radius="md" style={{ backgroundColor: 'white' }}>
          <div className="mb-6">
            <div className="flex">
              <div style={{ flex: 1 }}>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                  placeholder="Add a new task"
                  size="xl"
                />
              </div>
              <Button
                onClick={handleClick}
                variant="filled"
                color="blue"
                size="xl"
                style={{ marginLeft: '-10px' }}
              >
                Add
              </Button>
            </div>
          </div>
          <div>
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="rounded-lg p-4 flex flex-row items-center justify-between mb-4 shadow-sm"
                style={{
                  backgroundColor: 'white',
                }}
              >
                <Text size="xl" color="gray">
                  {todo.text}
                </Text>
                <Button
                  variant="filled"
                  color="red"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default TodoList;