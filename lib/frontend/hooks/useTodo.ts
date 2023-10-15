import { useState } from 'react';

//structure of each to-do item
interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export function useTodo() {

  //initialize to-do examples
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: 'Teste', completed: false },
    { id: 2, text: 'Teste2', completed: false },
  ]);

  const [input, setInput] = useState<string>('');


  //function to delete a to-do by ID
  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

   // Function to handle the button click event for adding a new to/do
  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      const newTodo: Item = { id: Date.now(), text, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  

  return {
    todos,
    input,
    setInput,
    deleteTodo,
    addTodo,
  };
}
