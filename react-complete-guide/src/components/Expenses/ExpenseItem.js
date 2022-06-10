// import React, { useState } from 'react';
import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    //컴포넌트에서 직접 호출해야한다. 내부 함수, 함수 외부 X
    // const [title, setTitle] = useState(props.title);
    // //여러개 렌더링 되면 당연히 여러번 실행되겠지
    // console.log("ExpenseItem evaluted by React");

    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     //로그 출력이 먼저 실행되기 때문에, state가 변화하기 전의 값이 찍힌다.
    //     console.log(title);
    // }

    return( 
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
}

export default ExpenseItem;