import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value : state.value, isValid: state.value.includes('')};
  }
  return {value:'',isValid: false};
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value : action.val, isValid: action.val.trim().length > 6};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value : state.value, isValid: state.value.trim().length > 6};
  }
  return {value:'',isValid: false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid:null
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{
    value: '',
    isValid:null
  });

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // 별칭 구조분해 할당
  const { isValid : emailisValid } = emailState;
  const { isValid : passwordisValid } = passwordState;

  useEffect(()=>{
    // 디바운스 구현 
    const identifier = setTimeout(()=>{
      console.log('checking form validity')
      setFormIsValid(emailisValid && passwordisValid);
    },500)
    // 첫 번째 사이드 이펙트가 실행 되기 전에는 실행되지 않는다.
    // 컴포넌트가 재 렌더링 되고 나서 실행된다.
    // 상단의 함수가 실행 되고 나서 클린업 함수가 실행 된다.
    return ()=>{
      console.log("clean up");
      // 클린업이 먼저 실행 된후 타이머가 생성되므로 
      // 시간내에 계속 실행 될 경우, 타이머 내부의 함수는 실행되지 않고
      // 마지막 함수 호출 뒤에 타이머 내부 함수가 실행되게 된다.
      clearTimeout(identifier);
    };
    // 의존성
  },[ emailisValid, passwordisValid ])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   event.target.value.trim().length > 6 && emailState.value.includes('@')
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'});
  };
  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailisValid){
      emailInputRef.current.focus();
    }else{
      passwordInputRef.current.focus();
    }
    
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email"
          label="E-mail"
          type="email"
          isValid={emailisValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          ref={passwordInputRef}
          id="passwerd"
          label="Password"
          type="password"
          isValid={passwordisValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {/* <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
