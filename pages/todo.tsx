import React from 'react';
import { Button, Input, Container, Text, Paper } from '@mantine/core';
import { useTodo } from "@/lib/frontend/hooks";

export const TodoList: React.FC = () => {
  const { todos, input, setInput, deleteTodo, addTodo } = useTodo();

  // vai chamar o hook de adicionar novo to-do e limpa o input field
  const handleClick = () => {
    addTodo(input);
    setInput(''); 
  };

  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #3498db, #9b59b6)',
      }}
    >
      <div className="text-center mb-6">
        <Text size="xl" color="white">
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
};

export default TodoList;
