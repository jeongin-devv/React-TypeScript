import { useState } from 'react'
import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Todo from './Models/Todo';
import TodosContextProvider from './Store/Todos-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const addTodoHandler = (todoText : string) => {
  //   const newTodo = new Todo(todoText);
  //   setTodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   })
  // };

  return (
    // <div>
    //   <NewTodo onAddTodo={addTodoHandler} />
    //   <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    // </div>
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
