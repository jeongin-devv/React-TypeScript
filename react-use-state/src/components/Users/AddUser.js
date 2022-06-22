import React, { useState, useRef } from 'react'
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';


const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // 읽기 용으로만 쓰는 것이 좋다 (ref를 사용 시 제어되지않는 컴포넌트가 될 수 있다)
    // 돔에 대한 직접적인 컨트롤은 리액트로 하는 것이 좋다
    // ref vs State = > ref : 정적 값(Read) , State : 변동
    // Vue에서 getters 와 Mutation 의 차이
    console.log(nameInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      })
      return;
    }
    if(+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message: 'Please enter a valid age (>0)'
      })
      return;
    }
    // console.log(enteredUsername, enteredAge);
    // props.onAddUser(enteredUsername, enteredAge)
    props.onAddUser(enteredName, enteredUserAge)
    setEnteredUsername('');
    setEnteredAge('');
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="text" 
            value={enteredUsername} 
            onChange={usernameChangeHandler} 
            ref={nameInputRef}/>
          <label htmlFor="age">Age (Years)</label>
          <input 
            id="age" 
            type="number" 
            value={enteredAge} 
            onChange={ageChangeHandler} 
            ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser;