import React, { useState } from "react";
import "./App.css";
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const clickAddButtonHandler = () => {
    //1. 새로운 형태의 이놈을 만든다/
    //2. 이놈{ id: 1, age: 30, name: "송중기" }
    //3. 이놈을 배열에 더한다

    const newUser = {
      id: users.length + 1,
      age,
      name: name,
    };

    setUsers([...users, newUser])
  };
  const clickDelButtonHandler = (id) => {
    // alert(id);
    const newUsers = users.filter(user => user.id !== id);
    // const newUsers = users.filter(function(user){
    //   return user.id !== id;
    // });
    setUsers(newUsers)
  };

  return (
    <div>
      <div>
      이름 : &nbsp;
      <input 
        value = {name}
        onChange = {nameChangeHandler}
        />
        {name} 
        <br />
      나이 : &nbsp; 
      <input 
        value = {age}
        onChange = {ageChangeHandler}/>
        {age}
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      
      <div className="app-style">
        {users.map((item) => {
          return (
            <User 
              key={item.id}
              item={item} 
              clickDelButtonHandler={clickDelButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

const Button = ({clickAddButtonHandler, children}) => {
  return <button onClick={clickAddButtonHandler}>{children}</button>  
};


export default App;
