import React, { useRef, useContext } from "react";
import { TodosContext } from "../Store/Todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosContext = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //? , ! 를 사용할 떄, 시점에 따른 객체의 존재에 확실성이 있어야 한다.
    const enteredText = todoTextInputRef.current!.value;
    //입력값 검증
    if (enteredText.trim().length === 0) {
      //에러 표시
      return;
    }

    todosContext.addTodo(enteredText);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo;